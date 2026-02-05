"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = __importStar(require("bcrypt"));
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Seeding database...');
    const organization = await prisma.organization.create({
        data: {
            name: 'Demo Corp',
            legalName: 'Demo Corporation Ltd',
            registrationNumber: 'DEMO123456',
            taxId: 'TAX123456789',
            country: 'US',
            address: {
                street: '123 Demo Street',
                city: 'San Francisco',
                state: 'CA',
                postalCode: '94105',
                country: 'US',
            },
            kybStatus: 'APPROVED',
            kybApprovedAt: new Date(),
            settings: {
                defaultCurrency: 'USD',
                timezone: 'America/Los_Angeles',
                language: 'en',
                notifications: {
                    email: true,
                    sms: false,
                },
            },
        },
    });
    console.log('✅ Created organization:', organization.name);
    const hashedPassword = await bcrypt.hash('password123', 10);
    const owner = await prisma.user.create({
        data: {
            email: 'owner@demo.com',
            firstName: 'John',
            lastName: 'Doe',
            passwordHash: hashedPassword,
            role: 'OWNER',
            organizationId: organization.id,
            mfaEnabled: false,
            isActive: true,
        },
    });
    const manager = await prisma.user.create({
        data: {
            email: 'manager@demo.com',
            firstName: 'Jane',
            lastName: 'Smith',
            passwordHash: hashedPassword,
            role: 'MANAGER',
            organizationId: organization.id,
            mfaEnabled: false,
            isActive: true,
        },
    });
    console.log('✅ Created users:', owner.email, manager.email);
    const usdWallet = await prisma.wallet.create({
        data: {
            organizationId: organization.id,
            type: 'FIAT',
            currency: 'USD',
            balance: 125430.50,
            availableBalance: 120430.50,
            pendingBalance: 5000.00,
        },
    });
    const eurWallet = await prisma.wallet.create({
        data: {
            organizationId: organization.id,
            type: 'FIAT',
            currency: 'EUR',
            balance: 98750.25,
            availableBalance: 98750.25,
            pendingBalance: 0,
        },
    });
    const usdcWallet = await prisma.wallet.create({
        data: {
            organizationId: organization.id,
            type: 'CRYPTO',
            currency: 'USDC',
            balance: 45200.00,
            availableBalance: 45200.00,
            pendingBalance: 0,
        },
    });
    console.log('✅ Created wallets:', usdWallet.currency, eurWallet.currency, usdcWallet.currency);
    await prisma.accountNumber.create({
        data: {
            organizationId: organization.id,
            name: 'USD Business Account',
            currency: 'USD',
            type: 'ACH',
            accountNumber: '1234567890',
            routingNumber: '021000021',
            bankName: 'Demo Bank',
            bankCountry: 'US',
        },
    });
    await prisma.accountNumber.create({
        data: {
            organizationId: organization.id,
            name: 'EUR Business Account',
            currency: 'EUR',
            type: 'IBAN',
            accountNumber: 'GB82WEST12345698765432',
            bankName: 'Demo Bank Europe',
            bankCountry: 'GB',
        },
    });
    console.log('✅ Created account numbers');
    const bankBeneficiary = await prisma.beneficiary.create({
        data: {
            organizationId: organization.id,
            name: 'Acme Corp',
            type: 'BANK',
            accountNumber: '9876543210',
            routingNumber: '021000021',
            bankName: 'Acme Bank',
            bankCountry: 'US',
            currency: 'USD',
        },
    });
    const cryptoBeneficiary = await prisma.beneficiary.create({
        data: {
            organizationId: organization.id,
            name: 'Crypto Wallet',
            type: 'CRYPTO',
            address: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6',
            currency: 'USDC',
            network: 'ethereum',
        },
    });
    console.log('✅ Created beneficiaries');
    await prisma.walletTransaction.createMany({
        data: [
            {
                walletId: usdWallet.id,
                type: 'DEPOSIT',
                amount: 10000.00,
                currency: 'USD',
                description: 'Wire transfer received',
                reference: 'WT-2024-001',
                status: 'COMPLETED',
            },
            {
                walletId: usdWallet.id,
                type: 'CONVERSION',
                amount: -5000.00,
                currency: 'USD',
                description: 'USD to EUR conversion',
                reference: 'CONV-2024-001',
                status: 'COMPLETED',
            },
            {
                walletId: eurWallet.id,
                type: 'CONVERSION',
                amount: 4600.00,
                currency: 'EUR',
                description: 'USD to EUR conversion',
                reference: 'CONV-2024-001',
                status: 'COMPLETED',
            },
            {
                walletId: usdWallet.id,
                type: 'WITHDRAWAL',
                amount: -2500.00,
                currency: 'USD',
                description: 'Payment to supplier',
                reference: 'PAY-2024-001',
                status: 'PROCESSING',
            },
        ],
    });
    console.log('✅ Created demo transactions');
    await prisma.conversionOrder.create({
        data: {
            organizationId: organization.id,
            fromCurrency: 'USD',
            toCurrency: 'EUR',
            fromAmount: 5000.00,
            toAmount: 4600.00,
            rate: 0.9200,
            fee: 5.00,
            status: 'COMPLETED',
            type: 'MARKET',
            executedAt: new Date(),
        },
    });
    console.log('✅ Created demo conversion order');
    await prisma.payout.create({
        data: {
            organizationId: organization.id,
            type: 'BANK',
            amount: 2500.00,
            currency: 'USD',
            beneficiaryId: bankBeneficiary.id,
            reference: 'INV-2024-001',
            description: 'Payment to supplier',
            status: 'PROCESSING',
            fee: 25.00,
        },
    });
    console.log('✅ Created demo payout');
    console.log('🎉 Database seeded successfully!');
    console.log('\nDemo credentials:');
    console.log('Owner: owner@demo.com / password123');
    console.log('Manager: manager@demo.com / password123');
}
main()
    .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map