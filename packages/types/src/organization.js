"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrganizationRequestSchema = exports.CreateOrganizationRequestSchema = exports.OrganizationSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
exports.OrganizationSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    legalName: zod_1.z.string(),
    registrationNumber: zod_1.z.string(),
    taxId: zod_1.z.string().optional(),
    country: zod_1.z.string().length(2),
    address: zod_1.z.object({
        street: zod_1.z.string(),
        city: zod_1.z.string(),
        state: zod_1.z.string().optional(),
        postalCode: zod_1.z.string(),
        country: zod_1.z.string().length(2),
    }),
    kybStatus: zod_1.z.enum(['pending', 'approved', 'rejected', 'requires_info']),
    kybSubmittedAt: zod_1.z.date().optional(),
    kybApprovedAt: zod_1.z.date().optional(),
    settings: zod_1.z.object({
        defaultCurrency: zod_1.z.string().default('USD'),
        timezone: zod_1.z.string().default('UTC'),
        language: zod_1.z.string().default('en'),
        notifications: zod_1.z.object({
            email: zod_1.z.boolean().default(true),
            sms: zod_1.z.boolean().default(false),
        }),
    }),
    ...common_1.TimestampsSchema.shape,
});
exports.CreateOrganizationRequestSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
    legalName: zod_1.z.string().min(1),
    registrationNumber: zod_1.z.string().min(1),
    taxId: zod_1.z.string().optional(),
    country: zod_1.z.string().length(2),
    address: zod_1.z.object({
        street: zod_1.z.string().min(1),
        city: zod_1.z.string().min(1),
        state: zod_1.z.string().optional(),
        postalCode: zod_1.z.string().min(1),
        country: zod_1.z.string().length(2),
    }),
});
exports.UpdateOrganizationRequestSchema = exports.CreateOrganizationRequestSchema.partial();
//# sourceMappingURL=organization.js.map