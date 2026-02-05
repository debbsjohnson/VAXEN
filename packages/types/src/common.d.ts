import { z } from 'zod';
export declare const CurrencyCodeSchema: z.ZodEnum<["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "SEK", "NOK", "DKK", "PLN", "CZK", "HUF", "RON", "BGN", "HRK", "RUB", "TRY", "ZAR", "BRL", "MXN", "INR", "KRW", "SGD", "HKD", "NZD", "THB", "MYR", "PHP", "IDR", "VND", "BTC", "ETH", "USDC", "USDT"]>;
export type CurrencyCode = z.infer<typeof CurrencyCodeSchema>;
export declare const AmountSchema: z.ZodObject<{
    value: z.ZodString;
    currency: z.ZodEnum<["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "SEK", "NOK", "DKK", "PLN", "CZK", "HUF", "RON", "BGN", "HRK", "RUB", "TRY", "ZAR", "BRL", "MXN", "INR", "KRW", "SGD", "HKD", "NZD", "THB", "MYR", "PHP", "IDR", "VND", "BTC", "ETH", "USDC", "USDT"]>;
}, "strip", z.ZodTypeAny, {
    value?: string;
    currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
}, {
    value?: string;
    currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
}>;
export type Amount = z.infer<typeof AmountSchema>;
export declare const PaginationSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    page?: number;
    limit?: number;
}, {
    page?: number;
    limit?: number;
}>;
export type Pagination = z.infer<typeof PaginationSchema>;
export declare const ApiResponseSchema: z.ZodObject<{
    success: z.ZodBoolean;
    data: z.ZodOptional<z.ZodAny>;
    error: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    message?: string;
    success?: boolean;
    data?: any;
    error?: string;
}, {
    message?: string;
    success?: boolean;
    data?: any;
    error?: string;
}>;
export type ApiResponse<T = any> = {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
};
export declare const PaginatedResponseSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodAny, "many">;
    pagination: z.ZodObject<{
        page: z.ZodNumber;
        limit: z.ZodNumber;
        total: z.ZodNumber;
        totalPages: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        page?: number;
        limit?: number;
        total?: number;
        totalPages?: number;
    }, {
        page?: number;
        limit?: number;
        total?: number;
        totalPages?: number;
    }>;
}, "strip", z.ZodTypeAny, {
    data?: any[];
    pagination?: {
        page?: number;
        limit?: number;
        total?: number;
        totalPages?: number;
    };
}, {
    data?: any[];
    pagination?: {
        page?: number;
        limit?: number;
        total?: number;
        totalPages?: number;
    };
}>;
export type PaginatedResponse<T = any> = {
    data: T[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
};
export declare const StatusSchema: z.ZodEnum<["pending", "processing", "completed", "failed", "cancelled"]>;
export type Status = z.infer<typeof StatusSchema>;
export declare const WalletTypeSchema: z.ZodEnum<["fiat", "crypto"]>;
export type WalletType = z.infer<typeof WalletTypeSchema>;
export declare const OrderTypeSchema: z.ZodEnum<["market", "limit"]>;
export type OrderType = z.infer<typeof OrderTypeSchema>;
export declare const ConversionTypeSchema: z.ZodEnum<["spot", "auto_convert", "limit"]>;
export type ConversionType = z.infer<typeof ConversionTypeSchema>;
export declare const TimestampsSchema: z.ZodObject<{
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    createdAt?: Date;
    updatedAt?: Date;
}, {
    createdAt?: Date;
    updatedAt?: Date;
}>;
export type Timestamps = z.infer<typeof TimestampsSchema>;
