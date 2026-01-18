# ADR-001: Provider Adapter Pattern

## Status
Accepted

## Context
Vaxen needs to integrate with multiple external providers for different services:
- **Fiat Rails**: Airwallex (primary), CurrencyCloud, PIX partners
- **Crypto Custody**: Privy (embedded wallets), Fireblocks
- **Liquidity**: Coinbase Exchange, Kraken
- **Compliance**: Sumsub/Persona (KYB), Chainalysis/TRM (KYT)

Each provider has different APIs, authentication methods, data formats, and error handling. We need a flexible architecture that allows:
1. Easy switching between providers
2. Fallback mechanisms
3. Consistent error handling
4. Mock implementations for testing
5. Record/replay capabilities for testing

## Decision
We will implement a **Provider Adapter Pattern** with the following structure:

### Core Interfaces
```typescript
// Fiat Rails
interface RailsProviderInterface {
  createAccount(data: any): Promise<any>;
  getAccount(accountId: string): Promise<any>;
  createDeposit(data: any): Promise<any>;
  createPayout(data: any): Promise<any>;
  getPayoutStatus(payoutId: string): Promise<any>;
}

// Crypto Custody
interface CustodyProviderInterface {
  createWallet(data: any): Promise<any>;
  getWallet(walletId: string): Promise<any>;
  generateDepositAddress(data: any): Promise<any>;
  createTransaction(data: any): Promise<any>;
  getTransactionStatus(txId: string): Promise<any>;
}

// Liquidity
interface LiquidityProviderInterface {
  getQuote(data: any): Promise<any>;
  executeTrade(data: any): Promise<any>;
  getTradeStatus(tradeId: string): Promise<any>;
  getMarketData(pair: string): Promise<any>;
}

// Compliance
interface ComplianceProviderInterface {
  submitKyb(data: any): Promise<any>;
  getKybStatus(caseId: string): Promise<any>;
  screenTransaction(data: any): Promise<any>;
  screenAddress(address: string): Promise<any>;
}
```

### Implementation Structure
```
src/providers/
├── providers.module.ts
├── providers.service.ts
└── adapters/
    ├── rails.provider.ts          # Airwallex implementation
    ├── custody.provider.ts        # Privy implementation
    ├── liquidity.provider.ts      # Coinbase/Kraken implementation
    ├── compliance.provider.ts     # Sumsub/Chainalysis implementation
    └── mocks/
        ├── mock-rails.provider.ts
        ├── mock-custody.provider.ts
        ├── mock-liquidity.provider.ts
        └── mock-compliance.provider.ts
```

### Key Features
1. **Interface Segregation**: Each provider type has its own interface
2. **Dependency Injection**: Providers are injected via NestJS DI
3. **Configuration-Driven**: Provider selection via environment variables
4. **Mock Support**: All providers have mock implementations
5. **Error Handling**: Consistent error responses across all providers
6. **Logging**: Comprehensive logging for debugging and monitoring

## Consequences

### Positive
- **Flexibility**: Easy to switch providers or add new ones
- **Testability**: Mock implementations enable comprehensive testing
- **Maintainability**: Clear separation of concerns
- **Consistency**: Uniform API across all providers
- **Fallback Support**: Can implement fallback mechanisms easily

### Negative
- **Complexity**: Additional abstraction layer
- **Development Time**: More upfront work to implement interfaces
- **Learning Curve**: Team needs to understand the pattern

### Risks
- **Over-Engineering**: Risk of creating unnecessary abstractions
- **Performance**: Additional layer might impact performance (minimal)

## Implementation Notes

### Provider Selection
```typescript
// Environment-based provider selection
const providerConfig = {
  rails: process.env.RAILS_PROVIDER || 'airwallex',
  custody: process.env.CUSTODY_PROVIDER || 'privy',
  liquidity: process.env.LIQUIDITY_PROVIDER || 'coinbase',
  compliance: process.env.COMPLIANCE_PROVIDER || 'sumsub',
};
```

### Error Handling
```typescript
// Consistent error format
interface ProviderError {
  code: string;
  message: string;
  provider: string;
  originalError?: any;
}
```

### Testing Strategy
1. **Unit Tests**: Test each provider implementation independently
2. **Integration Tests**: Test provider interactions with business logic
3. **Contract Tests**: Verify provider interfaces are implemented correctly
4. **Mock Tests**: Use mock providers for fast, reliable tests

## Future Considerations
- **Circuit Breaker**: Implement circuit breaker pattern for provider failures
- **Retry Logic**: Add exponential backoff for transient failures
- **Caching**: Cache provider responses where appropriate
- **Metrics**: Add provider performance metrics and monitoring
- **Rate Limiting**: Implement provider-specific rate limiting
