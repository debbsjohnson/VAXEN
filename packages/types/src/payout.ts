import { z } from 'zod';
import { CurrencyCodeSchema, AmountSchema, StatusSchema, TimestampsSchema } from './common';

export const PayoutSchema = z.object({
  id: z.string(),
  organizationId: z.string(),
  type: z.enum(['bank', 'crypto']),
  amount: AmountSchema,
  beneficiaryId: z.string(),
  reference: z.string().optional(),
  description: z.string().optional(),
  status: StatusSchema,
  fee: AmountSchema,
  executedAt: z.date().optional(),
  ...TimestampsSchema.shape,
});

export type Payout = z.infer<typeof PayoutSchema>;

export const CreatePayoutRequestSchema = z.object({
  type: z.enum(['bank', 'crypto']),
  amount: z.string().regex(/^\d+(\.\d{1,8})?$/),
  currency: CurrencyCodeSchema,
  beneficiaryId: z.string(),
  reference: z.string().optional(),
  description: z.string().optional(),
});

export type CreatePayoutRequest = z.infer<typeof CreatePayoutRequestSchema>;

export const PayoutBatchSchema = z.object({
  id: z.string(),
  organizationId: z.string(),
  name: z.string(),
  totalAmount: AmountSchema,
  totalCount: z.number(),
  processedCount: z.number(),
  status: StatusSchema,
  fileUrl: z.string().optional(),
  ...TimestampsSchema.shape,
});

export type PayoutBatch = z.infer<typeof PayoutBatchSchema>;

export const CreatePayoutBatchRequestSchema = z.object({
  name: z.string().min(1),
  payouts: z.array(CreatePayoutRequestSchema),
});

export type CreatePayoutBatchRequest = z.infer<typeof CreatePayoutBatchRequestSchema>;
