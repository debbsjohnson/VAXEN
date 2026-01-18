import { z } from 'zod';
import { CurrencyCodeSchema, AmountSchema, StatusSchema, TimestampsSchema } from './common';

export const DepositSchema = z.object({
  id: z.string(),
  organizationId: z.string(),
  walletId: z.string(),
  type: z.enum(['fiat', 'crypto']),
  amount: AmountSchema,
  reference: z.string().optional(),
  status: StatusSchema,
  providerReference: z.string().optional(),
  executedAt: z.date().optional(),
  ...TimestampsSchema.shape,
});

export type Deposit = z.infer<typeof DepositSchema>;

export const CreateDepositRequestSchema = z.object({
  walletId: z.string(),
  amount: z.string().regex(/^\d+(\.\d{1,8})?$/),
  currency: CurrencyCodeSchema,
  reference: z.string().optional(),
});

export type CreateDepositRequest = z.infer<typeof CreateDepositRequestSchema>;
