"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReconciliationRunSchema = exports.JournalSchema = exports.LedgerEntrySchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
exports.LedgerEntrySchema = zod_1.z.object({
    id: zod_1.z.string(),
    organizationId: zod_1.z.string(),
    journalId: zod_1.z.string(),
    account: zod_1.z.string(),
    debit: common_1.AmountSchema.optional(),
    credit: common_1.AmountSchema.optional(),
    description: zod_1.z.string(),
    reference: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.any()).optional(),
    ...common_1.TimestampsSchema.shape,
});
exports.JournalSchema = zod_1.z.object({
    id: zod_1.z.string(),
    organizationId: zod_1.z.string(),
    type: zod_1.z.string(),
    description: zod_1.z.string(),
    reference: zod_1.z.string().optional(),
    status: zod_1.z.enum(['pending', 'posted', 'reversed']),
    postedAt: zod_1.z.date().optional(),
    ...common_1.TimestampsSchema.shape,
});
exports.ReconciliationRunSchema = zod_1.z.object({
    id: zod_1.z.string(),
    organizationId: zod_1.z.string(),
    date: zod_1.z.date(),
    status: zod_1.z.enum(['pending', 'completed', 'failed']),
    discrepancies: zod_1.z.array(zod_1.z.object({
        type: zod_1.z.string(),
        amount: common_1.AmountSchema,
        description: zod_1.z.string(),
    })),
    completedAt: zod_1.z.date().optional(),
    ...common_1.TimestampsSchema.shape,
});
//# sourceMappingURL=ledger.js.map