import { z } from 'zod';
export declare const StatementFileSchema: z.ZodObject<{
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    id: z.ZodString;
    organizationId: z.ZodString;
    type: z.ZodEnum<["pdf", "csv"]>;
    period: z.ZodObject<{
        startDate: z.ZodDate;
        endDate: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        startDate?: Date;
        endDate?: Date;
    }, {
        startDate?: Date;
        endDate?: Date;
    }>;
    currency: z.ZodEnum<["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "SEK", "NOK", "DKK", "PLN", "CZK", "HUF", "RON", "BGN", "HRK", "RUB", "TRY", "ZAR", "BRL", "MXN", "INR", "KRW", "SGD", "HKD", "NZD", "THB", "MYR", "PHP", "IDR", "VND", "BTC", "ETH", "USDC", "USDT"]>;
    fileUrl: z.ZodString;
    fileSize: z.ZodNumber;
    status: z.ZodEnum<["generating", "ready", "failed"]>;
    generatedAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    type?: "pdf" | "csv";
    status?: "failed" | "generating" | "ready";
    id?: string;
    organizationId?: string;
    currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    createdAt?: Date;
    updatedAt?: Date;
    fileUrl?: string;
    period?: {
        startDate?: Date;
        endDate?: Date;
    };
    fileSize?: number;
    generatedAt?: Date;
}, {
    type?: "pdf" | "csv";
    status?: "failed" | "generating" | "ready";
    id?: string;
    organizationId?: string;
    currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    createdAt?: Date;
    updatedAt?: Date;
    fileUrl?: string;
    period?: {
        startDate?: Date;
        endDate?: Date;
    };
    fileSize?: number;
    generatedAt?: Date;
}>;
export type StatementFile = z.infer<typeof StatementFileSchema>;
export declare const GenerateStatementRequestSchema: z.ZodObject<{
    type: z.ZodEnum<["pdf", "csv"]>;
    period: z.ZodObject<{
        startDate: z.ZodDate;
        endDate: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        startDate?: Date;
        endDate?: Date;
    }, {
        startDate?: Date;
        endDate?: Date;
    }>;
    currency: z.ZodEnum<["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "SEK", "NOK", "DKK", "PLN", "CZK", "HUF", "RON", "BGN", "HRK", "RUB", "TRY", "ZAR", "BRL", "MXN", "INR", "KRW", "SGD", "HKD", "NZD", "THB", "MYR", "PHP", "IDR", "VND", "BTC", "ETH", "USDC", "USDT"]>;
}, "strip", z.ZodTypeAny, {
    type?: "pdf" | "csv";
    currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    period?: {
        startDate?: Date;
        endDate?: Date;
    };
}, {
    type?: "pdf" | "csv";
    currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    period?: {
        startDate?: Date;
        endDate?: Date;
    };
}>;
export type GenerateStatementRequest = z.infer<typeof GenerateStatementRequestSchema>;
