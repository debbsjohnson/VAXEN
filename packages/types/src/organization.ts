import { z } from 'zod';
import { TimestampsSchema } from './common';

export const OrganizationSchema = z.object({
  id: z.string(),
  name: z.string(),
  legalName: z.string(),
  registrationNumber: z.string(),
  taxId: z.string().optional(),
  country: z.string().length(2), // ISO country code
  address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string().optional(),
    postalCode: z.string(),
    country: z.string().length(2),
  }),
  kybStatus: z.enum(['pending', 'approved', 'rejected', 'requires_info']),
  kybSubmittedAt: z.date().optional(),
  kybApprovedAt: z.date().optional(),
  settings: z.object({
    defaultCurrency: z.string().default('USD'),
    timezone: z.string().default('UTC'),
    language: z.string().default('en'),
    notifications: z.object({
      email: z.boolean().default(true),
      sms: z.boolean().default(false),
    }),
  }),
  ...TimestampsSchema.shape,
});

export type Organization = z.infer<typeof OrganizationSchema>;

export const CreateOrganizationRequestSchema = z.object({
  name: z.string().min(1),
  legalName: z.string().min(1),
  registrationNumber: z.string().min(1),
  taxId: z.string().optional(),
  country: z.string().length(2),
  address: z.object({
    street: z.string().min(1),
    city: z.string().min(1),
    state: z.string().optional(),
    postalCode: z.string().min(1),
    country: z.string().length(2),
  }),
});

export type CreateOrganizationRequest = z.infer<typeof CreateOrganizationRequestSchema>;

export const UpdateOrganizationRequestSchema = CreateOrganizationRequestSchema.partial();
export type UpdateOrganizationRequest = z.infer<typeof UpdateOrganizationRequestSchema>;
