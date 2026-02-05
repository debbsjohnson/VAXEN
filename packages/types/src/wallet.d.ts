import { z } from 'zod';
export declare const WalletSchema: z.ZodObject<{
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    id: z.ZodString;
    organizationId: z.ZodString;
    type: z.ZodEnum<["fiat", "crypto"]>;
    currency: z.ZodEnum<["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "SEK", "NOK", "DKK", "PLN", "CZK", "HUF", "RON", "BGN", "HRK", "RUB", "TRY", "ZAR", "BRL", "MXN", "INR", "KRW", "SGD", "HKD", "NZD", "THB", "MYR", "PHP", "IDR", "VND", "BTC", "ETH", "USDC", "USDT"]>;
    balance: z.ZodString;
    availableBalance: z.ZodString;
    pendingBalance: z.ZodString;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    type?: "fiat" | "crypto";
    id?: string;
    organizationId?: string;
    currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    createdAt?: Date;
    updatedAt?: Date;
    isActive?: boolean;
    balance?: string;
    availableBalance?: string;
    pendingBalance?: string;
}, {
    type?: "fiat" | "crypto";
    id?: string;
    organizationId?: string;
    currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    createdAt?: Date;
    updatedAt?: Date;
    isActive?: boolean;
    balance?: string;
    availableBalance?: string;
    pendingBalance?: string;
}>;
export type Wallet = z.infer<typeof WalletSchema>;
export declare const CreateWalletRequestSchema: z.ZodObject<{
    type: z.ZodEnum<["fiat", "crypto"]>;
    currency: z.ZodEnum<["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "SEK", "NOK", "DKK", "PLN", "CZK", "HUF", "RON", "BGN", "HRK", "RUB", "TRY", "ZAR", "BRL", "MXN", "INR", "KRW", "SGD", "HKD", "NZD", "THB", "MYR", "PHP", "IDR", "VND", "BTC", "ETH", "USDC", "USDT"]>;
}, "strip", z.ZodTypeAny, {
    type?: "fiat" | "crypto";
    currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
}, {
    type?: "fiat" | "crypto";
    currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
}>;
export type CreateWalletRequest = z.infer<typeof CreateWalletRequestSchema>;
export declare const WalletTransactionSchema: z.ZodObject<{
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    id: z.ZodString;
    walletId: z.ZodString;
    type: z.ZodEnum<["deposit", "withdrawal", "transfer_in", "transfer_out", "conversion", "fee"]>;
    amount: z.ZodString;
    currency: z.ZodEnum<["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "SEK", "NOK", "DKK", "PLN", "CZK", "HUF", "RON", "BGN", "HRK", "RUB", "TRY", "ZAR", "BRL", "MXN", "INR", "KRW", "SGD", "HKD", "NZD", "THB", "MYR", "PHP", "IDR", "VND", "BTC", "ETH", "USDC", "USDT"]>;
    description: z.ZodString;
    reference: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<["pending", "processing", "completed", "failed"]>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    type?: "deposit" | "withdrawal" | "transfer_in" | "transfer_out" | "conversion" | "fee";
    status?: "pending" | "processing" | "completed" | "failed";
    id?: string;
    currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    createdAt?: Date;
    updatedAt?: Date;
    walletId?: string;
    amount?: string;
    description?: string;
    reference?: string;
    metadata?: Record<string, any>;
}, {
    type?: "deposit" | "withdrawal" | "transfer_in" | "transfer_out" | "conversion" | "fee";
    status?: "pending" | "processing" | "completed" | "failed";
    id?: string;
    currency?: "USD" | "EUR" | "USDC" | "GBP" | "JPY" | "CAD" | "AUD" | "CHF" | "CNY" | "SEK" | "NOK" | "DKK" | "PLN" | "CZK" | "HUF" | "RON" | "BGN" | "HRK" | "RUB" | "TRY" | "ZAR" | "BRL" | "MXN" | "INR" | "KRW" | "SGD" | "HKD" | "NZD" | "THB" | "MYR" | "PHP" | "IDR" | "VND" | "BTC" | "ETH" | "USDT";
    createdAt?: Date;
    updatedAt?: Date;
    walletId?: string;
    amount?: string;
    description?: string;
    reference?: string;
    metadata?: Record<string, any>;
}>;
export type WalletTransaction = z.infer<typeof WalletTransactionSchema>;
