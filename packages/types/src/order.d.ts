import { z } from 'zod';
export declare const LimitOrderSchema: z.ZodObject<{
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    id: z.ZodString;
    organizationId: z.ZodString;
    fromCurrency: z.ZodEnum<["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "SEK", "NOK", "DKK", "PLN", "CZK", "HUF", "RON", "BGN", "HRK", "RUB", "TRY", "ZAR", "BRL", "MXN", "INR", "KRW", "SGD", "HKD", "NZD", "THB", "MYR", "PHP", "IDR", "VND", "BTC", "ETH", "USDC", "USDT"]>;
    toCurrency: z.ZodEnum<["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "SEK", "NOK", "DKK", "PLN", "CZK", "HUF", "RON", "BGN", "HRK", "RUB", "TRY", "ZAR", "BRL", "MXN", "INR", "KRW", "SGD", "HKD", "NZD", "THB", "MYR", "PHP", "IDR", "VND", "BTC", "ETH", "USDC", "USDT"]>;
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
    limitPrice: z.ZodString;
    type: z.ZodEnum<["market", "limit"]>;
    status: z.ZodEnum<["pending", "processing", "completed", "failed", "cancelled"]>;
    executedAt: z.ZodOptional<z.ZodDate>;
    cancelledAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    type?: "limit" | "market";
    status?: "pending" | "processing" | "completed" | "failed" | "cancelled";
    id?: string;
    organizationId?: string;
    createdAt?: Date;
    updatedAt?: Date;
    amount?: {
        value?: string;
        currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    };
    executedAt?: Date;
    fromCurrency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    toCurrency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    limitPrice?: string;
    cancelledAt?: Date;
}, {
    type?: "limit" | "market";
    status?: "pending" | "processing" | "completed" | "failed" | "cancelled";
    id?: string;
    organizationId?: string;
    createdAt?: Date;
    updatedAt?: Date;
    amount?: {
        value?: string;
        currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    };
    executedAt?: Date;
    fromCurrency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    toCurrency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    limitPrice?: string;
    cancelledAt?: Date;
}>;
export type LimitOrder = z.infer<typeof LimitOrderSchema>;
export declare const CreateLimitOrderRequestSchema: z.ZodObject<{
    fromCurrency: z.ZodEnum<["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "SEK", "NOK", "DKK", "PLN", "CZK", "HUF", "RON", "BGN", "HRK", "RUB", "TRY", "ZAR", "BRL", "MXN", "INR", "KRW", "SGD", "HKD", "NZD", "THB", "MYR", "PHP", "IDR", "VND", "BTC", "ETH", "USDC", "USDT"]>;
    toCurrency: z.ZodEnum<["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "SEK", "NOK", "DKK", "PLN", "CZK", "HUF", "RON", "BGN", "HRK", "RUB", "TRY", "ZAR", "BRL", "MXN", "INR", "KRW", "SGD", "HKD", "NZD", "THB", "MYR", "PHP", "IDR", "VND", "BTC", "ETH", "USDC", "USDT"]>;
    amount: z.ZodString;
    limitPrice: z.ZodString;
}, "strip", z.ZodTypeAny, {
    amount?: string;
    fromCurrency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    toCurrency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    limitPrice?: string;
}, {
    amount?: string;
    fromCurrency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    toCurrency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    limitPrice?: string;
}>;
export type CreateLimitOrderRequest = z.infer<typeof CreateLimitOrderRequestSchema>;
