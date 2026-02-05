"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteResponseSchema = exports.QuoteRequestSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
exports.QuoteRequestSchema = zod_1.z.object({
    fromCurrency: common_1.CurrencyCodeSchema,
    toCurrency: common_1.CurrencyCodeSchema,
    amount: zod_1.z.string().regex(/^\d+(\.\d{1,8})?$/),
    type: zod_1.z.enum(['spot', 'auto_convert', 'limit']).default('spot'),
});
exports.QuoteResponseSchema = zod_1.z.object({
    id: zod_1.z.string(),
    fromCurrency: common_1.CurrencyCodeSchema,
    toCurrency: common_1.CurrencyCodeSchema,
    fromAmount: common_1.AmountSchema,
    toAmount: common_1.AmountSchema,
    rate: zod_1.z.string(),
    spread: zod_1.z.string(),
    fee: common_1.AmountSchema,
    expiresAt: zod_1.z.date(),
    type: zod_1.z.enum(['spot', 'auto_convert', 'limit']),
    ...common_1.TimestampsSchema.shape,
});
//# sourceMappingURL=quote.js.map