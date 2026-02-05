"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBeneficiaryCryptoRequestSchema = exports.CreateBeneficiaryBankRequestSchema = exports.BeneficiaryCryptoSchema = exports.BeneficiaryBankSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
exports.BeneficiaryBankSchema = zod_1.z.object({
    id: zod_1.z.string(),
    organizationId: zod_1.z.string(),
    name: zod_1.z.string(),
    accountNumber: zod_1.z.string(),
    routingNumber: zod_1.z.string().optional(),
    bankCode: zod_1.z.string().optional(),
    bankName: zod_1.z.string(),
    bankCountry: zod_1.z.string().length(2),
    currency: common_1.CurrencyCodeSchema,
    isActive: zod_1.z.boolean().default(true),
    ...common_1.TimestampsSchema.shape,
});
exports.BeneficiaryCryptoSchema = zod_1.z.object({
    id: zod_1.z.string(),
    organizationId: zod_1.z.string(),
    name: zod_1.z.string(),
    address: zod_1.z.string(),
    currency: common_1.CurrencyCodeSchema,
    network: zod_1.z.string(),
    isActive: zod_1.z.boolean().default(true),
    ...common_1.TimestampsSchema.shape,
});
exports.CreateBeneficiaryBankRequestSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
    accountNumber: zod_1.z.string().min(1),
    routingNumber: zod_1.z.string().optional(),
    bankCode: zod_1.z.string().optional(),
    bankName: zod_1.z.string().min(1),
    bankCountry: zod_1.z.string().length(2),
    currency: common_1.CurrencyCodeSchema,
});
exports.CreateBeneficiaryCryptoRequestSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
    address: zod_1.z.string().min(1),
    currency: common_1.CurrencyCodeSchema,
    network: zod_1.z.string().min(1),
});
//# sourceMappingURL=beneficiary.js.map