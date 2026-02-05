"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountNumberRequestSchema = exports.AccountNumberSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
exports.AccountNumberSchema = zod_1.z.object({
    id: zod_1.z.string(),
    organizationId: zod_1.z.string(),
    name: zod_1.z.string(),
    currency: common_1.CurrencyCodeSchema,
    type: zod_1.z.enum(['iban', 'pix', 'ach', 'swift']),
    accountNumber: zod_1.z.string(),
    routingNumber: zod_1.z.string().optional(),
    bankCode: zod_1.z.string().optional(),
    bankName: zod_1.z.string(),
    bankCountry: zod_1.z.string().length(2),
    isActive: zod_1.z.boolean().default(true),
    ...common_1.TimestampsSchema.shape,
});
exports.CreateAccountNumberRequestSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
    currency: common_1.CurrencyCodeSchema,
    type: zod_1.z.enum(['iban', 'pix', 'ach', 'swift']),
    accountNumber: zod_1.z.string().min(1),
    routingNumber: zod_1.z.string().optional(),
    bankCode: zod_1.z.string().optional(),
    bankName: zod_1.z.string().min(1),
    bankCountry: zod_1.z.string().length(2),
});
//# sourceMappingURL=account.js.map