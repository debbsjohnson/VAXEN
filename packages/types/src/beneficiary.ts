import { z } from 'zod';
import { CurrencyCodeSchema, TimestampsSchema } from './common';

export const BeneficiaryBankSchema = z.object({
  id: z.string(),
  organizationId: z.string(),
  name: z.string(),
  accountNumber: z.string(),
  routingNumber: z.string().optional(),
  bankCode: z.string().optional(),
  bankName: z.string(),
  bankCountry: z.string().length(2),
  currency: CurrencyCodeSchema,
  isActive: z.boolean().default(true),
  ...TimestampsSchema.shape,
});

export type BeneficiaryBank = z.infer<typeof BeneficiaryBankSchema>;

export const BeneficiaryCryptoSchema = z.object({
  id: z.string(),
  organizationId: z.string(),
  name: z.string(),
  address: z.string(),
  currency: CurrencyCodeSchema,
  network: z.string(),
  isActive: z.boolean().default(true),
  ...TimestampsSchema.shape,
});

export type BeneficiaryCrypto = z.infer<typeof BeneficiaryCryptoSchema>;

export const CreateBeneficiaryBankRequestSchema = z.object({
  name: z.string().min(1),
  accountNumber: z.string().min(1),
  routingNumber: z.string().optional(),
  bankCode: z.string().optional(),
  bankName: z.string().min(1),
  bankCountry: z.string().length(2),
  currency: CurrencyCodeSchema,
});

export type CreateBeneficiaryBankRequest = z.infer<typeof CreateBeneficiaryBankRequestSchema>;

export const CreateBeneficiaryCryptoRequestSchema = z.object({
  name: z.string().min(1),
  address: z.string().min(1),
  currency: CurrencyCodeSchema,
  network: z.string().min(1),
});

export type CreateBeneficiaryCryptoRequest = z.infer<typeof CreateBeneficiaryCryptoRequestSchema>;
