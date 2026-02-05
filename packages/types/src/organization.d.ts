import { z } from 'zod';
export declare const OrganizationSchema: z.ZodObject<{
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    id: z.ZodString;
    name: z.ZodString;
    legalName: z.ZodString;
    registrationNumber: z.ZodString;
    taxId: z.ZodOptional<z.ZodString>;
    country: z.ZodString;
    address: z.ZodObject<{
        street: z.ZodString;
        city: z.ZodString;
        state: z.ZodOptional<z.ZodString>;
        postalCode: z.ZodString;
        country: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        country?: string;
        street?: string;
        city?: string;
        state?: string;
        postalCode?: string;
    }, {
        country?: string;
        street?: string;
        city?: string;
        state?: string;
        postalCode?: string;
    }>;
    kybStatus: z.ZodEnum<["pending", "approved", "rejected", "requires_info"]>;
    kybSubmittedAt: z.ZodOptional<z.ZodDate>;
    kybApprovedAt: z.ZodOptional<z.ZodDate>;
    settings: z.ZodObject<{
        defaultCurrency: z.ZodDefault<z.ZodString>;
        timezone: z.ZodDefault<z.ZodString>;
        language: z.ZodDefault<z.ZodString>;
        notifications: z.ZodObject<{
            email: z.ZodDefault<z.ZodBoolean>;
            sms: z.ZodDefault<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            email?: boolean;
            sms?: boolean;
        }, {
            email?: boolean;
            sms?: boolean;
        }>;
    }, "strip", z.ZodTypeAny, {
        defaultCurrency?: string;
        timezone?: string;
        language?: string;
        notifications?: {
            email?: boolean;
            sms?: boolean;
        };
    }, {
        defaultCurrency?: string;
        timezone?: string;
        language?: string;
        notifications?: {
            email?: boolean;
            sms?: boolean;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    name?: string;
    legalName?: string;
    registrationNumber?: string;
    taxId?: string;
    country?: string;
    address?: {
        country?: string;
        street?: string;
        city?: string;
        state?: string;
        postalCode?: string;
    };
    kybStatus?: "pending" | "approved" | "rejected" | "requires_info";
    kybSubmittedAt?: Date;
    kybApprovedAt?: Date;
    settings?: {
        defaultCurrency?: string;
        timezone?: string;
        language?: string;
        notifications?: {
            email?: boolean;
            sms?: boolean;
        };
    };
}, {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    name?: string;
    legalName?: string;
    registrationNumber?: string;
    taxId?: string;
    country?: string;
    address?: {
        country?: string;
        street?: string;
        city?: string;
        state?: string;
        postalCode?: string;
    };
    kybStatus?: "pending" | "approved" | "rejected" | "requires_info";
    kybSubmittedAt?: Date;
    kybApprovedAt?: Date;
    settings?: {
        defaultCurrency?: string;
        timezone?: string;
        language?: string;
        notifications?: {
            email?: boolean;
            sms?: boolean;
        };
    };
}>;
export type Organization = z.infer<typeof OrganizationSchema>;
export declare const CreateOrganizationRequestSchema: z.ZodObject<{
    name: z.ZodString;
    legalName: z.ZodString;
    registrationNumber: z.ZodString;
    taxId: z.ZodOptional<z.ZodString>;
    country: z.ZodString;
    address: z.ZodObject<{
        street: z.ZodString;
        city: z.ZodString;
        state: z.ZodOptional<z.ZodString>;
        postalCode: z.ZodString;
        country: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        country?: string;
        street?: string;
        city?: string;
        state?: string;
        postalCode?: string;
    }, {
        country?: string;
        street?: string;
        city?: string;
        state?: string;
        postalCode?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    legalName?: string;
    registrationNumber?: string;
    taxId?: string;
    country?: string;
    address?: {
        country?: string;
        street?: string;
        city?: string;
        state?: string;
        postalCode?: string;
    };
}, {
    name?: string;
    legalName?: string;
    registrationNumber?: string;
    taxId?: string;
    country?: string;
    address?: {
        country?: string;
        street?: string;
        city?: string;
        state?: string;
        postalCode?: string;
    };
}>;
export type CreateOrganizationRequest = z.infer<typeof CreateOrganizationRequestSchema>;
export declare const UpdateOrganizationRequestSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    legalName: z.ZodOptional<z.ZodString>;
    registrationNumber: z.ZodOptional<z.ZodString>;
    taxId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    country: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodObject<{
        street: z.ZodString;
        city: z.ZodString;
        state: z.ZodOptional<z.ZodString>;
        postalCode: z.ZodString;
        country: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        country?: string;
        street?: string;
        city?: string;
        state?: string;
        postalCode?: string;
    }, {
        country?: string;
        street?: string;
        city?: string;
        state?: string;
        postalCode?: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    legalName?: string;
    registrationNumber?: string;
    taxId?: string;
    country?: string;
    address?: {
        country?: string;
        street?: string;
        city?: string;
        state?: string;
        postalCode?: string;
    };
}, {
    name?: string;
    legalName?: string;
    registrationNumber?: string;
    taxId?: string;
    country?: string;
    address?: {
        country?: string;
        street?: string;
        city?: string;
        state?: string;
        postalCode?: string;
    };
}>;
export type UpdateOrganizationRequest = z.infer<typeof UpdateOrganizationRequestSchema>;
