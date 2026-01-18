import { z } from 'zod';
import { TimestampsSchema } from './common';

export const ComplianceCaseSchema = z.object({
  id: z.string(),
  organizationId: z.string(),
  type: z.enum(['kyb', 'kyt', 'aml']),
  status: z.enum(['pending', 'approved', 'rejected', 'requires_info']),
  provider: z.string(),
  providerCaseId: z.string(),
  submittedAt: z.date(),
  completedAt: z.date().optional(),
  ...TimestampsSchema.shape,
});

export type ComplianceCase = z.infer<typeof ComplianceCaseSchema>;

export const ScreeningResultSchema = z.object({
  id: z.string(),
  organizationId: z.string(),
  type: z.enum(['transaction', 'address', 'entity']),
  status: z.enum(['clean', 'flagged', 'blocked']),
  riskScore: z.number().min(0).max(100),
  provider: z.string(),
  details: z.record(z.any()),
  ...TimestampsSchema.shape,
});

export type ScreeningResult = z.infer<typeof ScreeningResultSchema>;
