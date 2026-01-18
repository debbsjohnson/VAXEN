import { z } from 'zod';
import { CurrencyCodeSchema, AmountSchema, StatusSchema, TimestampsSchema } from './common';

export const ConversionOrderSchema = z.object({
  id: z.string(),
  organizationId: z.string(),
  fromCurrency: CurrencyCodeSchema,
  toCurrency: CurrencyCodeSchema,
  fromAmount: AmountSchema,
  toAmount: AmountSchema,
  rate: z.string(),
  fee: AmountSchema,
  status: StatusSchema,
  type: z.enum(['market', 'limit']),
  limitPrice: z.string().optional(),
  executedAt: z.date().optional(),
  ...TimestampsSchema.shape,
});

export type ConversionOrder = z.infer<typeof ConversionOrderSchema>;

export const CreateConversionRequestSchema = z.object({
  fromCurrency: CurrencyCodeSchema,
  toCurrency: CurrencyCodeSchema,
  amount: z.string().regex(/^\d+(\.\d{1,8})?$/),
  type: z.enum(['market', 'limit']).default('market'),
  limitPrice: z.string().optional(),
});

export type CreateConversionRequest = z.infer<typeof CreateConversionRequestSchema>;
