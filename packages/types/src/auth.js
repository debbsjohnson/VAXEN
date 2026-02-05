"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MfaVerifyRequestSchema = exports.MfaSetupRequestSchema = exports.RefreshTokenRequestSchema = exports.LoginResponseSchema = exports.LoginRequestSchema = exports.UserRoleSchema = void 0;
const zod_1 = require("zod");
exports.UserRoleSchema = zod_1.z.enum(['owner', 'manager', 'finance', 'viewer']);
exports.LoginRequestSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8),
    mfaCode: zod_1.z.string().optional(),
});
exports.LoginResponseSchema = zod_1.z.object({
    accessToken: zod_1.z.string(),
    refreshToken: zod_1.z.string(),
    user: zod_1.z.object({
        id: zod_1.z.string(),
        email: zod_1.z.string().email(),
        role: exports.UserRoleSchema,
        organizationId: zod_1.z.string(),
        mfaEnabled: zod_1.z.boolean(),
    }),
});
exports.RefreshTokenRequestSchema = zod_1.z.object({
    refreshToken: zod_1.z.string(),
});
exports.MfaSetupRequestSchema = zod_1.z.object({
    secret: zod_1.z.string(),
    code: zod_1.z.string().length(6),
});
exports.MfaVerifyRequestSchema = zod_1.z.object({
    code: zod_1.z.string().length(6),
});
//# sourceMappingURL=auth.js.map