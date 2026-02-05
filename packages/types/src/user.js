"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePasswordRequestSchema = exports.UpdateUserRequestSchema = exports.CreateUserRequestSchema = exports.UserSchema = void 0;
const zod_1 = require("zod");
const auth_1 = require("./auth");
const common_1 = require("./common");
exports.UserSchema = zod_1.z.object({
    id: zod_1.z.string(),
    email: zod_1.z.string().email(),
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    role: auth_1.UserRoleSchema,
    organizationId: zod_1.z.string(),
    mfaEnabled: zod_1.z.boolean(),
    mfaSecret: zod_1.z.string().optional(),
    lastLoginAt: zod_1.z.date().optional(),
    isActive: zod_1.z.boolean().default(true),
    ...common_1.TimestampsSchema.shape,
});
exports.CreateUserRequestSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    firstName: zod_1.z.string().min(1),
    lastName: zod_1.z.string().min(1),
    role: auth_1.UserRoleSchema,
    password: zod_1.z.string().min(8),
});
exports.UpdateUserRequestSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1).optional(),
    lastName: zod_1.z.string().min(1).optional(),
    role: auth_1.UserRoleSchema.optional(),
    isActive: zod_1.z.boolean().optional(),
});
exports.ChangePasswordRequestSchema = zod_1.z.object({
    currentPassword: zod_1.z.string(),
    newPassword: zod_1.z.string().min(8),
});
//# sourceMappingURL=user.js.map