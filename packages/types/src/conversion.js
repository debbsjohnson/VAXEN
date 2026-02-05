"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateConversionRequestSchema = exports.ConversionOrderSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
exports.ConversionOrderSchema = zod_1.z.object({
    id: zod_1.z.string(),
    organizationId: zod_1.z.string(),
    fromCurrency: common_1.CurrencyCodeSchema,
    toCurrency: common_1.CurrencyCodeSchema,
    fromAmount: common_1.AmountSchema,
    toAmount: common_1.AmountSchema,
    rate: zod_1.z.string(),
    fee: common_1.AmountSchema,
    status: common_1.StatusSchema,
    type: zod_1.z.enum(['market', 'limit']),
    limitPrice: zod_1.z.string().optional(),
    executedAt: zod_1.z.date().optional(),
    ...common_1.TimestampsSchema.shape,
});
exports.CreateConversionRequestSchema = zod_1.z.object({
    fromCurrency: common_1.CurrencyCodeSchema,
    toCurrency: common_1.CurrencyCodeSchema,
    amount: zod_1.z.string().regex(/^\d+(\.\d{1,8})?$/),
    type: zod_1.z.enum(['market', 'limit']).default('market'),
    limitPrice: zod_1.z.string().optional(),
});
//# sourceMappingURL=conversion.js.map