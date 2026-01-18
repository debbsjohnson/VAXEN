# ADR-002: Double-Entry Ledger and Reconciliation Approach

## Status
Accepted

## Context
Vaxen handles financial transactions across multiple currencies and asset types (fiat and crypto). We need a robust accounting system that:
1. Maintains accurate balances across all wallets
2. Provides audit trails for all transactions
3. Enables reconciliation with external providers
4. Supports complex financial operations (conversions, fees, etc.)
5. Ensures data integrity and consistency

Traditional single-entry systems are insufficient for financial applications. We need a proper double-entry bookkeeping system.

## Decision
We will implement a **Double-Entry Ledger System** with the following components:

### Core Entities

#### Journal
```typescript
interface Journal {
  id: string;
  organizationId: string;
  type: string;                    // e.g., 'CONVERSION', 'PAYOUT', 'DEPOSIT'
  description: string;
  reference: string?;              // External reference
  status: 'PENDING' | 'POSTED' | 'REVERSED';
  postedAt: DateTime?;
  createdAt: DateTime;
  updatedAt: DateTime;
}
```

#### Ledger Entry
```typescript
interface LedgerEntry {
  id: string;
  organizationId: string;
  journalId: string;
  account: string;                 // e.g., 'USD_WALLET', 'EUR_WALLET', 'CONVERSION_FEE'
  debit: Amount?;                  // Decimal amount
  credit: Amount?;                 // Decimal amount
  description: string;
  reference: string?;
  metadata: Json?;                 // Additional transaction data
  createdAt: DateTime;
  updatedAt: DateTime;
}
```

### Account Structure
```
Assets:
├── FIAT_WALLETS/
│   ├── USD_WALLET
│   ├── EUR_WALLET
│   └── GBP_WALLET
├── CRYPTO_WALLETS/
│   ├── USDC_WALLET
│   ├── BTC_WALLET
│   └── ETH_WALLET
└── PENDING_TRANSACTIONS/

Liabilities:
└── CUSTOMER_BALANCES/

Equity:
└── RETAINED_EARNINGS/

Income:
├── CONVERSION_FEES/
├── PAYOUT_FEES/
└── INTEREST_INCOME/

Expenses:
├── PROVIDER_FEES/
├── OPERATIONAL_COSTS/
└── CONVERSION_LOSSES/
```

### Transaction Examples

#### 1. USD to EUR Conversion
```typescript
// Journal: CONVERSION_001
// Debit EUR_WALLET: 4,600.00 EUR
// Credit USD_WALLET: 5,000.00 USD
// Debit CONVERSION_FEE: 5.00 USD
// Credit RETAINED_EARNINGS: 5.00 USD

const conversionJournal = {
  type: 'CONVERSION',
  description: 'USD to EUR conversion',
  reference: 'CONV-2024-001',
  entries: [
    { account: 'EUR_WALLET', debit: { value: '4600.00', currency: 'EUR' } },
    { account: 'USD_WALLET', credit: { value: '5000.00', currency: 'USD' } },
    { account: 'CONVERSION_FEE', debit: { value: '5.00', currency: 'USD' } },
    { account: 'RETAINED_EARNINGS', credit: { value: '5.00', currency: 'USD' } },
  ]
};
```

#### 2. Payout Transaction
```typescript
// Journal: PAYOUT_001
// Debit PENDING_TRANSACTIONS: 2,500.00 USD
// Credit USD_WALLET: 2,500.00 USD
// Debit PAYOUT_FEE: 25.00 USD
// Credit RETAINED_EARNINGS: 25.00 USD

const payoutJournal = {
  type: 'PAYOUT',
  description: 'Payment to supplier',
  reference: 'PAY-2024-001',
  entries: [
    { account: 'PENDING_TRANSACTIONS', debit: { value: '2500.00', currency: 'USD' } },
    { account: 'USD_WALLET', credit: { value: '2500.00', currency: 'USD' } },
    { account: 'PAYOUT_FEE', debit: { value: '25.00', currency: 'USD' } },
    { account: 'RETAINED_EARNINGS', credit: { value: '25.00', currency: 'USD' } },
  ]
};
```

### Reconciliation System

#### Daily Reconciliation Process
```typescript
interface ReconciliationRun {
  id: string;
  organizationId: string;
  date: DateTime;
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
  discrepancies: Discrepancy[];
  completedAt: DateTime?;
}

interface Discrepancy {
  type: 'BALANCE_MISMATCH' | 'MISSING_TRANSACTION' | 'DUPLICATE_TRANSACTION';
  amount: Amount;
  description: string;
  providerData?: any;
  internalData?: any;
}
```

#### Reconciliation Steps
1. **Fetch Provider Data**: Get balances and transactions from all providers
2. **Compare Balances**: Compare provider balances with internal ledger
3. **Match Transactions**: Match provider transactions with internal records
4. **Identify Discrepancies**: Flag any mismatches or missing transactions
5. **Generate Report**: Create reconciliation report with discrepancies
6. **Manual Review**: Flag discrepancies for manual review
7. **Adjustments**: Create adjustment journals for approved discrepancies

### Implementation Details

#### Ledger Service
```typescript
@Injectable()
export class LedgerService {
  async postJournal(journal: CreateJournalRequest): Promise<Journal> {
    // 1. Validate journal (debits = credits)
    this.validateJournal(journal);
    
    // 2. Create journal record
    const journalRecord = await this.prisma.journal.create({
      data: { ...journal, status: 'PENDING' }
    });
    
    // 3. Create ledger entries
    for (const entry of journal.entries) {
      await this.prisma.ledgerEntry.create({
        data: { ...entry, journalId: journalRecord.id }
      });
    }
    
    // 4. Update journal status
    await this.prisma.journal.update({
      where: { id: journalRecord.id },
      data: { status: 'POSTED', postedAt: new Date() }
    });
    
    return journalRecord;
  }
  
  private validateJournal(journal: CreateJournalRequest): void {
    const totalDebits = journal.entries
      .filter(e => e.debit)
      .reduce((sum, e) => sum + parseFloat(e.debit.value), 0);
      
    const totalCredits = journal.entries
      .filter(e => e.credit)
      .reduce((sum, e) => sum + parseFloat(e.credit.value), 0);
      
    if (Math.abs(totalDebits - totalCredits) > 0.01) {
      throw new Error('Journal is not balanced');
    }
  }
}
```

#### Balance Calculation
```typescript
async getAccountBalance(account: string, currency: string): Promise<Amount> {
  const entries = await this.prisma.ledgerEntry.findMany({
    where: { 
      account,
      OR: [
        { debit: { currency } },
        { credit: { currency } }
      ]
    }
  });
  
  const balance = entries.reduce((sum, entry) => {
    if (entry.debit?.currency === currency) {
      return sum + parseFloat(entry.debit.value);
    }
    if (entry.credit?.currency === currency) {
      return sum - parseFloat(entry.credit.value);
    }
    return sum;
  }, 0);
  
  return {
    value: balance.toFixed(8),
    currency
  };
}
```

## Consequences

### Positive
- **Accuracy**: Double-entry ensures mathematical accuracy
- **Audit Trail**: Complete transaction history
- **Reconciliation**: Easy to reconcile with external providers
- **Compliance**: Meets accounting standards
- **Flexibility**: Supports complex financial operations

### Negative
- **Complexity**: More complex than single-entry systems
- **Performance**: Additional database operations
- **Learning Curve**: Team needs accounting knowledge

### Risks
- **Data Integrity**: Risk of unbalanced journals
- **Performance**: Large transaction volumes might impact performance
- **Complexity**: Risk of over-engineering simple operations

## Implementation Strategy

### Phase 1: Core Ledger (Current)
- [x] Journal and LedgerEntry entities
- [x] Basic posting logic
- [x] Balance calculation
- [x] Simple transaction types

### Phase 2: Advanced Features
- [ ] Automated reconciliation
- [ ] Discrepancy management
- [ ] Reporting and analytics
- [ ] Audit trail enhancements

### Phase 3: Optimization
- [ ] Performance optimization
- [ ] Batch processing
- [ ] Advanced reporting
- [ ] Integration with external accounting systems

## Testing Strategy
1. **Unit Tests**: Test ledger posting logic
2. **Integration Tests**: Test end-to-end transaction flows
3. **Balance Tests**: Verify balance calculations
4. **Reconciliation Tests**: Test reconciliation processes
5. **Performance Tests**: Test with large transaction volumes

## Monitoring
- **Balance Alerts**: Monitor for unexpected balance changes
- **Reconciliation Alerts**: Flag failed reconciliations
- **Performance Metrics**: Track ledger operation performance
- **Audit Logs**: Log all ledger operations
