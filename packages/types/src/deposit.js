"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDepositRequestSchema = exports.DepositSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
exports.DepositSchema = zod_1.z.object({
    id: zod_1.z.string(),
    organizationId: zod_1.z.string(),
    walletId: zod_1.z.string(),
    type: zod_1.z.enum(['fiat', 'crypto']),
    amount: common_1.AmountSchema,
    reference: zod_1.z.string().optional(),
    status: common_1.StatusSchema,
    providerReference: zod_1.z.string().optional(),
    executedAt: zod_1.z.date().optional(),
    ...common_1.TimestampsSchema.shape,
});
exports.CreateDepositRequestSchema = zod_1.z.object({
    walletId: zod_1.z.string(),
    amount: zod_1.z.string().regex(/^\d+(\.\d{1,8})?$/),
    currency: common_1.CurrencyCodeSchema,
    reference: zod_1.z.string().optional(),
});
//# sourceMappingURL=deposit.js.map