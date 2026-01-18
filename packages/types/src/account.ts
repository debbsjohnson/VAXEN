import { z } from 'zod';
import { CurrencyCodeSchema, TimestampsSchema } from './common';

export const AccountNumberSchema = z.object({
  id: z.string(),
  organizationId: z.string(),
  name: z.string(),
  currency: CurrencyCodeSchema,
  type: z.enum(['iban', 'pix', 'ach', 'swift']),
  accountNumber: z.string(),
  routingNumber: z.string().optional(),
  bankCode: z.string().optional(),
  bankName: z.string(),
  bankCountry: z.string().length(2),
  isActive: z.boolean().default(true),
  ...TimestampsSchema.shape,
});

export type AccountNumber = z.infer<typeof AccountNumberSchema>;

export const CreateAccountNumberRequestSchema = z.object({
  name: z.string().min(1),
  currency: CurrencyCodeSchema,
  type: z.enum(['iban', 'pix', 'ach', 'swift']),
  accountNumber: z.string().min(1),
  routingNumber: z.string().optional(),
  bankCode: z.string().optional(),
  bankName: z.string().min(1),
  bankCountry: z.string().length(2),
});

export type CreateAccountNumberRequest = z.infer<typeof CreateAccountNumberRequestSchema>;
