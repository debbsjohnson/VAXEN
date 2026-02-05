"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreeningResultSchema = exports.ComplianceCaseSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
exports.ComplianceCaseSchema = zod_1.z.object({
    id: zod_1.z.string(),
    organizationId: zod_1.z.string(),
    type: zod_1.z.enum(['kyb', 'kyt', 'aml']),
    status: zod_1.z.enum(['pending', 'approved', 'rejected', 'requires_info']),
    provider: zod_1.z.string(),
    providerCaseId: zod_1.z.string(),
    submittedAt: zod_1.z.date(),
    completedAt: zod_1.z.date().optional(),
    ...common_1.TimestampsSchema.shape,
});
exports.ScreeningResultSchema = zod_1.z.object({
    id: zod_1.z.string(),
    organizationId: zod_1.z.string(),
    type: zod_1.z.enum(['transaction', 'address', 'entity']),
    status: zod_1.z.enum(['clean', 'flagged', 'blocked']),
    riskScore: zod_1.z.number().min(0).max(100),
    provider: zod_1.z.string(),
    details: zod_1.z.record(zod_1.z.any()),
    ...common_1.TimestampsSchema.shape,
});
//# sourceMappingURL=compliance.js.map