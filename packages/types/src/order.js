"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLimitOrderRequestSchema = exports.LimitOrderSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
exports.LimitOrderSchema = zod_1.z.object({
    id: zod_1.z.string(),
    organizationId: zod_1.z.string(),
    fromCurrency: common_1.CurrencyCodeSchema,
    toCurrency: common_1.CurrencyCodeSchema,
    amount: common_1.AmountSchema,
    limitPrice: zod_1.z.string(),
    type: common_1.OrderTypeSchema,
    status: common_1.StatusSchema,
    executedAt: zod_1.z.date().optional(),
    cancelledAt: zod_1.z.date().optional(),
    ...common_1.TimestampsSchema.shape,
});
exports.CreateLimitOrderRequestSchema = zod_1.z.object({
    fromCurrency: common_1.CurrencyCodeSchema,
    toCurrency: common_1.CurrencyCodeSchema,
    amount: zod_1.z.string().regex(/^\d+(\.\d{1,8})?$/),
    limitPrice: zod_1.z.string().regex(/^\d+(\.\d{1,8})?$/),
});
//# sourceMappingURL=order.js.map