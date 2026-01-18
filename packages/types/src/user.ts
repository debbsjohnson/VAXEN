import { z } from 'zod';
import { UserRoleSchema } from './auth';
import { TimestampsSchema } from './common';

export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  role: UserRoleSchema,
  organizationId: z.string(),
  mfaEnabled: z.boolean(),
  mfaSecret: z.string().optional(),
  lastLoginAt: z.date().optional(),
  isActive: z.boolean().default(true),
  ...TimestampsSchema.shape,
});

export type User = z.infer<typeof UserSchema>;

export const CreateUserRequestSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  role: UserRoleSchema,
  password: z.string().min(8),
});

export type CreateUserRequest = z.infer<typeof CreateUserRequestSchema>;

export const UpdateUserRequestSchema = z.object({
  firstName: z.string().min(1).optional(),
  lastName: z.string().min(1).optional(),
  role: UserRoleSchema.optional(),
  isActive: z.boolean().optional(),
});

export type UpdateUserRequest = z.infer<typeof UpdateUserRequestSchema>;

export const ChangePasswordRequestSchema = z.object({
  currentPassword: z.string(),
  newPassword: z.string().min(8),
});

export type ChangePasswordRequest = z.infer<typeof ChangePasswordRequestSchema>;
