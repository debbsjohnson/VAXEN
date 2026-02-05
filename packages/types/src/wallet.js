"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletTransactionSchema = exports.CreateWalletRequestSchema = exports.WalletSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
exports.WalletSchema = zod_1.z.object({
    id: zod_1.z.string(),
    organizationId: zod_1.z.string(),
    type: common_1.WalletTypeSchema,
    currency: common_1.CurrencyCodeSchema,
    balance: zod_1.z.string(),
    availableBalance: zod_1.z.string(),
    pendingBalance: zod_1.z.string(),
    isActive: zod_1.z.boolean().default(true),
    ...common_1.TimestampsSchema.shape,
});
exports.CreateWalletRequestSchema = zod_1.z.object({
    type: common_1.WalletTypeSchema,
    currency: common_1.CurrencyCodeSchema,
});
exports.WalletTransactionSchema = zod_1.z.object({
    id: zod_1.z.string(),
    walletId: zod_1.z.string(),
    type: zod_1.z.enum(['deposit', 'withdrawal', 'transfer_in', 'transfer_out', 'conversion', 'fee']),
    amount: zod_1.z.string(),
    currency: common_1.CurrencyCodeSchema,
    description: zod_1.z.string(),
    reference: zod_1.z.string().optional(),
    status: zod_1.z.enum(['pending', 'processing', 'completed', 'failed']),
    metadata: zod_1.z.record(zod_1.z.any()).optional(),
    ...common_1.TimestampsSchema.shape,
});
//# sourceMappingURL=wallet.js.map