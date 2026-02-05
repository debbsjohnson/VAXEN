"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePayoutBatchRequestSchema = exports.PayoutBatchSchema = exports.CreatePayoutRequestSchema = exports.PayoutSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
exports.PayoutSchema = zod_1.z.object({
    id: zod_1.z.string(),
    organizationId: zod_1.z.string(),
    type: zod_1.z.enum(['bank', 'crypto']),
    amount: common_1.AmountSchema,
    beneficiaryId: zod_1.z.string(),
    reference: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    status: common_1.StatusSchema,
    fee: common_1.AmountSchema,
    executedAt: zod_1.z.date().optional(),
    ...common_1.TimestampsSchema.shape,
});
exports.CreatePayoutRequestSchema = zod_1.z.object({
    type: zod_1.z.enum(['bank', 'crypto']),
    amount: zod_1.z.string().regex(/^\d+(\.\d{1,8})?$/),
    currency: common_1.CurrencyCodeSchema,
    beneficiaryId: zod_1.z.string(),
    reference: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
});
exports.PayoutBatchSchema = zod_1.z.object({
    id: zod_1.z.string(),
    organizationId: zod_1.z.string(),
    name: zod_1.z.string(),
    totalAmount: common_1.AmountSchema,
    totalCount: zod_1.z.number(),
    processedCount: zod_1.z.number(),
    status: common_1.StatusSchema,
    fileUrl: zod_1.z.string().optional(),
    ...common_1.TimestampsSchema.shape,
});
exports.CreatePayoutBatchRequestSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
    payouts: zod_1.z.array(exports.CreatePayoutRequestSchema),
});
//# sourceMappingURL=payout.js.map