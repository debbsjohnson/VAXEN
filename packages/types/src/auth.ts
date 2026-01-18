import { z } from 'zod';

// User roles
export const UserRoleSchema = z.enum(['owner', 'manager', 'finance', 'viewer']);
export type UserRole = z.infer<typeof UserRoleSchema>;

// Auth schemas
export const LoginRequestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  mfaCode: z.string().optional(),
});

export type LoginRequest = z.infer<typeof LoginRequestSchema>;

export const LoginResponseSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
  user: z.object({
    id: z.string(),
    email: z.string().email(),
    role: UserRoleSchema,
    organizationId: z.string(),
    mfaEnabled: z.boolean(),
  }),
});

export type LoginResponse = z.infer<typeof LoginResponseSchema>;

export const RefreshTokenRequestSchema = z.object({
  refreshToken: z.string(),
});

export type RefreshTokenRequest = z.infer<typeof RefreshTokenRequestSchema>;

export const MfaSetupRequestSchema = z.object({
  secret: z.string(),
  code: z.string().length(6),
});

export type MfaSetupRequest = z.infer<typeof MfaSetupRequestSchema>;

export const MfaVerifyRequestSchema = z.object({
  code: z.string().length(6),
});

export type MfaVerifyRequest = z.infer<typeof MfaVerifyRequestSchema>;
