"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimestampsSchema = exports.ConversionTypeSchema = exports.OrderTypeSchema = exports.WalletTypeSchema = exports.StatusSchema = exports.PaginatedResponseSchema = exports.ApiResponseSchema = exports.PaginationSchema = exports.AmountSchema = exports.CurrencyCodeSchema = void 0;
const zod_1 = require("zod");
exports.CurrencyCodeSchema = zod_1.z.enum([
    'USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY', 'SEK', 'NOK',
    'DKK', 'PLN', 'CZK', 'HUF', 'RON', 'BGN', 'HRK', 'RUB', 'TRY', 'ZAR',
    'BRL', 'MXN', 'INR', 'KRW', 'SGD', 'HKD', 'NZD', 'THB', 'MYR', 'PHP',
    'IDR', 'VND', 'BTC', 'ETH', 'USDC', 'USDT'
]);
exports.AmountSchema = zod_1.z.object({
    value: zod_1.z.string().regex(/^\d+(\.\d{1,8})?$/),
    currency: exports.CurrencyCodeSchema,
});
exports.PaginationSchema = zod_1.z.object({
    page: zod_1.z.number().int().min(1).default(1),
    limit: zod_1.z.number().int().min(1).max(100).default(20),
});
exports.ApiResponseSchema = zod_1.z.object({
    success: zod_1.z.boolean(),
    data: zod_1.z.any().optional(),
    error: zod_1.z.string().optional(),
    message: zod_1.z.string().optional(),
});
exports.PaginatedResponseSchema = zod_1.z.object({
    data: zod_1.z.array(zod_1.z.any()),
    pagination: zod_1.z.object({
        page: zod_1.z.number(),
        limit: zod_1.z.number(),
        total: zod_1.z.number(),
        totalPages: zod_1.z.number(),
    }),
});
exports.StatusSchema = zod_1.z.enum(['pending', 'processing', 'completed', 'failed', 'cancelled']);
exports.WalletTypeSchema = zod_1.z.enum(['fiat', 'crypto']);
exports.OrderTypeSchema = zod_1.z.enum(['market', 'limit']);
exports.ConversionTypeSchema = zod_1.z.enum(['spot', 'auto_convert', 'limit']);
exports.TimestampsSchema = zod_1.z.object({
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
//# sourceMappingURL=common.js.map