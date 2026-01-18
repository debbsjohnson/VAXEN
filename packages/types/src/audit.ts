import { z } from 'zod';
import { TimestampsSchema } from './common';

export const AuditLogSchema = z.object({
  id: z.string(),
  organizationId: z.string(),
  userId: z.string().optional(),
  action: z.string(),
  resource: z.string(),
  resourceId: z.string().optional(),
  details: z.record(z.any()).optional(),
  ipAddress: z.string().optional(),
  userAgent: z.string().optional(),
  ...TimestampsSchema.shape,
});

export type AuditLog = z.infer<typeof AuditLogSchema>;

export const WebhookEventSchema = z.object({
  id: z.string(),
  organizationId: z.string(),
  provider: z.string(),
  eventType: z.string(),
  payload: z.record(z.any()),
  status: z.enum(['pending', 'processed', 'failed']),
  processedAt: z.date().optional(),
  retryCount: z.number().default(0),
  ...TimestampsSchema.shape,
});

export type WebhookEvent = z.infer<typeof WebhookEventSchema>;
