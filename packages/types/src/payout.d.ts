import { z } from 'zod';
export declare const PayoutSchema: z.ZodObject<{
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    id: z.ZodString;
    organizationId: z.ZodString;
    type: z.ZodEnum<["bank", "crypto"]>;
    amount: z.ZodObject<{
        value: z.ZodString;
        currency: z.ZodEnum<["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "SEK", "NOK", "DKK", "PLN", "CZK", "HUF", "RON", "BGN", "HRK", "RUB", "TRY", "ZAR", "BRL", "MXN", "INR", "KRW", "SGD", "HKD", "NZD", "THB", "MYR", "PHP", "IDR", "VND", "BTC", "ETH", "USDC", "USDT"]>;
    }, "strip", z.ZodTypeAny, {
        value?: string;
        currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    }, {
        value?: string;
        currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    }>;
    beneficiaryId: z.ZodString;
    reference: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<["pending", "processing", "completed", "failed", "cancelled"]>;
    fee: z.ZodObject<{
        value: z.ZodString;
        currency: z.ZodEnum<["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "SEK", "NOK", "DKK", "PLN", "CZK", "HUF", "RON", "BGN", "HRK", "RUB", "TRY", "ZAR", "BRL", "MXN", "INR", "KRW", "SGD", "HKD", "NZD", "THB", "MYR", "PHP", "IDR", "VND", "BTC", "ETH", "USDC", "USDT"]>;
    }, "strip", z.ZodTypeAny, {
        value?: string;
        currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    }, {
        value?: string;
        currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    }>;
    executedAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    type?: "crypto" | "bank";
    status?: "pending" | "processing" | "completed" | "failed" | "cancelled";
    id?: string;
    organizationId?: string;
    createdAt?: Date;
    updatedAt?: Date;
    fee?: {
        value?: string;
        currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    };
    amount?: {
        value?: string;
        currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    };
    description?: string;
    reference?: string;
    executedAt?: Date;
    beneficiaryId?: string;
}, {
    type?: "crypto" | "bank";
    status?: "pending" | "processing" | "completed" | "failed" | "cancelled";
    id?: string;
    organizationId?: string;
    createdAt?: Date;
    updatedAt?: Date;
    fee?: {
        value?: string;
        currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    };
    amount?: {
        value?: string;
        currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    };
    description?: string;
    reference?: string;
    executedAt?: Date;
    beneficiaryId?: string;
}>;
export type Payout = z.infer<typeof PayoutSchema>;
export declare const CreatePayoutRequestSchema: z.ZodObject<{
    type: z.ZodEnum<["bank", "crypto"]>;
    amount: z.ZodString;
    currency: z.ZodEnum<["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "SEK", "NOK", "DKK", "PLN", "CZK", "HUF", "RON", "BGN", "HRK", "RUB", "TRY", "ZAR", "BRL", "MXN", "INR", "KRW", "SGD", "HKD", "NZD", "THB", "MYR", "PHP", "IDR", "VND", "BTC", "ETH", "USDC", "USDT"]>;
    beneficiaryId: z.ZodString;
    reference: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type?: "crypto" | "bank";
    currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    amount?: string;
    description?: string;
    reference?: string;
    beneficiaryId?: string;
}, {
    type?: "crypto" | "bank";
    currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    amount?: string;
    description?: string;
    reference?: string;
    beneficiaryId?: string;
}>;
export type CreatePayoutRequest = z.infer<typeof CreatePayoutRequestSchema>;
export declare const PayoutBatchSchema: z.ZodObject<{
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    id: z.ZodString;
    organizationId: z.ZodString;
    name: z.ZodString;
    totalAmount: z.ZodObject<{
        value: z.ZodString;
        currency: z.ZodEnum<["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "SEK", "NOK", "DKK", "PLN", "CZK", "HUF", "RON", "BGN", "HRK", "RUB", "TRY", "ZAR", "BRL", "MXN", "INR", "KRW", "SGD", "HKD", "NZD", "THB", "MYR", "PHP", "IDR", "VND", "BTC", "ETH", "USDC", "USDT"]>;
    }, "strip", z.ZodTypeAny, {
        value?: string;
        currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    }, {
        value?: string;
        currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    }>;
    totalCount: z.ZodNumber;
    processedCount: z.ZodNumber;
    status: z.ZodEnum<["pending", "processing", "completed", "failed", "cancelled"]>;
    fileUrl: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status?: "pending" | "processing" | "completed" | "failed" | "cancelled";
    id?: string;
    organizationId?: string;
    createdAt?: Date;
    updatedAt?: Date;
    name?: string;
    totalAmount?: {
        value?: string;
        currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    };
    totalCount?: number;
    processedCount?: number;
    fileUrl?: string;
}, {
    status?: "pending" | "processing" | "completed" | "failed" | "cancelled";
    id?: string;
    organizationId?: string;
    createdAt?: Date;
    updatedAt?: Date;
    name?: string;
    totalAmount?: {
        value?: string;
        currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    };
    totalCount?: number;
    processedCount?: number;
    fileUrl?: string;
}>;
export type PayoutBatch = z.infer<typeof PayoutBatchSchema>;
export declare const CreatePayoutBatchRequestSchema: z.ZodObject<{
    name: z.ZodString;
    payouts: z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<["bank", "crypto"]>;
        amount: z.ZodString;
        currency: z.ZodEnum<["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "SEK", "NOK", "DKK", "PLN", "CZK", "HUF", "RON", "BGN", "HRK", "RUB", "TRY", "ZAR", "BRL", "MXN", "INR", "KRW", "SGD", "HKD", "NZD", "THB", "MYR", "PHP", "IDR", "VND", "BTC", "ETH", "USDC", "USDT"]>;
        beneficiaryId: z.ZodString;
        reference: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type?: "crypto" | "bank";
        currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
        amount?: string;
        description?: string;
        reference?: string;
        beneficiaryId?: string;
    }, {
        type?: "crypto" | "bank";
        currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
        amount?: string;
        description?: string;
        reference?: string;
        beneficiaryId?: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name?: string;
    payouts?: {
        type?: "crypto" | "bank";
        currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
        amount?: string;
        description?: string;
        reference?: string;
        beneficiaryId?: string;
    }[];
}, {
    name?: string;
    payouts?: {
        type?: "crypto" | "bank";
        currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
        amount?: string;
        description?: string;
        reference?: string;
        beneficiaryId?: string;
    }[];
}>;
export type CreatePayoutBatchRequest = z.infer<typeof CreatePayoutBatchRequestSchema>;
