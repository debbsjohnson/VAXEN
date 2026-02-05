import { z } from 'zod';
export declare const ComplianceCaseSchema: z.ZodObject<{
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    id: z.ZodString;
    organizationId: z.ZodString;
    type: z.ZodEnum<["kyb", "kyt", "aml"]>;
    status: z.ZodEnum<["pending", "approved", "rejected", "requires_info"]>;
    provider: z.ZodString;
    providerCaseId: z.ZodString;
    submittedAt: z.ZodDate;
    completedAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    type?: "kyb" | "kyt" | "aml";
    status?: "pending" | "approved" | "rejected" | "requires_info";
    id?: string;
    organizationId?: string;
    createdAt?: Date;
    updatedAt?: Date;
    completedAt?: Date;
    provider?: string;
    providerCaseId?: string;
    submittedAt?: Date;
}, {
    type?: "kyb" | "kyt" | "aml";
    status?: "pending" | "approved" | "rejected" | "requires_info";
    id?: string;
    organizationId?: string;
    createdAt?: Date;
    updatedAt?: Date;
    completedAt?: Date;
    provider?: string;
    providerCaseId?: string;
    submittedAt?: Date;
}>;
export type ComplianceCase = z.infer<typeof ComplianceCaseSchema>;
export declare const ScreeningResultSchema: z.ZodObject<{
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    id: z.ZodString;
    organizationId: z.ZodString;
    type: z.ZodEnum<["transaction", "address", "entity"]>;
    status: z.ZodEnum<["clean", "flagged", "blocked"]>;
    riskScore: z.ZodNumber;
    provider: z.ZodString;
    details: z.ZodRecord<z.ZodString, z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    type?: "address" | "transaction" | "entity";
    status?: "clean" | "flagged" | "blocked";
    id?: string;
    organizationId?: string;
    createdAt?: Date;
    updatedAt?: Date;
    provider?: string;
    riskScore?: number;
    details?: Record<string, any>;
}, {
    type?: "address" | "transaction" | "entity";
    status?: "clean" | "flagged" | "blocked";
    id?: string;
    organizationId?: string;
    createdAt?: Date;
    updatedAt?: Date;
    provider?: string;
    riskScore?: number;
    details?: Record<string, any>;
}>;
export type ScreeningResult = z.infer<typeof ScreeningResultSchema>;
