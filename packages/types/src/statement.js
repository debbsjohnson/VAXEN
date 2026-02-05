"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateStatementRequestSchema = exports.StatementFileSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
exports.StatementFileSchema = zod_1.z.object({
    id: zod_1.z.string(),
    organizationId: zod_1.z.string(),
    type: zod_1.z.enum(['pdf', 'csv']),
    period: zod_1.z.object({
        startDate: zod_1.z.date(),
        endDate: zod_1.z.date(),
    }),
    currency: common_1.CurrencyCodeSchema,
    fileUrl: zod_1.z.string(),
    fileSize: zod_1.z.number(),
    status: zod_1.z.enum(['generating', 'ready', 'failed']),
    generatedAt: zod_1.z.date().optional(),
    ...common_1.TimestampsSchema.shape,
});
exports.GenerateStatementRequestSchema = zod_1.z.object({
    type: zod_1.z.enum(['pdf', 'csv']),
    period: zod_1.z.object({
        startDate: zod_1.z.date(),
        endDate: zod_1.z.date(),
    }),
    currency: common_1.CurrencyCodeSchema,
});
//# sourceMappingURL=statement.js.map