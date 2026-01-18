import { z } from 'zod';
import { CurrencyCodeSchema, AmountSchema, TimestampsSchema } from './common';

export const QuoteRequestSchema = z.object({
  fromCurrency: CurrencyCodeSchema,
  toCurrency: CurrencyCodeSchema,
  amount: z.string().regex(/^\d+(\.\d{1,8})?$/),
  type: z.enum(['spot', 'auto_convert', 'limit']).default('spot'),
});

export type QuoteRequest = z.infer<typeof QuoteRequestSchema>;

export const QuoteResponseSchema = z.object({
  id: z.string(),
  fromCurrency: CurrencyCodeSchema,
  toCurrency: CurrencyCodeSchema,
  fromAmount: AmountSchema,
  toAmount: AmountSchema,
  rate: z.string(),
  spread: z.string(),
  fee: AmountSchema,
  expiresAt: z.date(),
  type: z.enum(['spot', 'auto_convert', 'limit']),
  ...TimestampsSchema.shape,
});

export type QuoteResponse = z.infer<typeof QuoteResponseSchema>;
