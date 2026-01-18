import { z } from 'zod';
import { CurrencyCodeSchema, TimestampsSchema } from './common';

export const StatementFileSchema = z.object({
  id: z.string(),
  organizationId: z.string(),
  type: z.enum(['pdf', 'csv']),
  period: z.object({
    startDate: z.date(),
    endDate: z.date(),
  }),
  currency: CurrencyCodeSchema,
  fileUrl: z.string(),
  fileSize: z.number(),
  status: z.enum(['generating', 'ready', 'failed']),
  generatedAt: z.date().optional(),
  ...TimestampsSchema.shape,
});

export type StatementFile = z.infer<typeof StatementFileSchema>;

export const GenerateStatementRequestSchema = z.object({
  type: z.enum(['pdf', 'csv']),
  period: z.object({
    startDate: z.date(),
    endDate: z.date(),
  }),
  currency: CurrencyCodeSchema,
});

export type GenerateStatementRequest = z.infer<typeof GenerateStatementRequestSchema>;
