"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookEventSchema = exports.AuditLogSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
exports.AuditLogSchema = zod_1.z.object({
    id: zod_1.z.string(),
    organizationId: zod_1.z.string(),
    userId: zod_1.z.string().optional(),
    action: zod_1.z.string(),
    resource: zod_1.z.string(),
    resourceId: zod_1.z.string().optional(),
    details: zod_1.z.record(zod_1.z.any()).optional(),
    ipAddress: zod_1.z.string().optional(),
    userAgent: zod_1.z.string().optional(),
    ...common_1.TimestampsSchema.shape,
});
exports.WebhookEventSchema = zod_1.z.object({
    id: zod_1.z.string(),
    organizationId: zod_1.z.string(),
    provider: zod_1.z.string(),
    eventType: zod_1.z.string(),
    payload: zod_1.z.record(zod_1.z.any()),
    status: zod_1.z.enum(['pending', 'processed', 'failed']),
    processedAt: zod_1.z.date().optional(),
    retryCount: zod_1.z.number().default(0),
    ...common_1.TimestampsSchema.shape,
});
//# sourceMappingURL=audit.js.map