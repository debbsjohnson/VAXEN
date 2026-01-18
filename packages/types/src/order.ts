import { z } from 'zod';
import { CurrencyCodeSchema, AmountSchema, StatusSchema, OrderTypeSchema, TimestampsSchema } from './common';

export const LimitOrderSchema = z.object({
  id: z.string(),
  organizationId: z.string(),
  fromCurrency: CurrencyCodeSchema,
  toCurrency: CurrencyCodeSchema,
  amount: AmountSchema,
  limitPrice: z.string(),
  type: OrderTypeSchema,
  status: StatusSchema,
  executedAt: z.date().optional(),
  cancelledAt: z.date().optional(),
  ...TimestampsSchema.shape,
});

export type LimitOrder = z.infer<typeof LimitOrderSchema>;

export const CreateLimitOrderRequestSchema = z.object({
  fromCurrency: CurrencyCodeSchema,
  toCurrency: CurrencyCodeSchema,
  amount: z.string().regex(/^\d+(\.\d{1,8})?$/),
  limitPrice: z.string().regex(/^\d+(\.\d{1,8})?$/),
});

export type CreateLimitOrderRequest = z.infer<typeof CreateLimitOrderRequestSchema>;
