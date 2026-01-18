import { z } from 'zod';

// Currency codes
export const CurrencyCodeSchema = z.enum([
  'USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY', 'SEK', 'NOK',
  'DKK', 'PLN', 'CZK', 'HUF', 'RON', 'BGN', 'HRK', 'RUB', 'TRY', 'ZAR',
  'BRL', 'MXN', 'INR', 'KRW', 'SGD', 'HKD', 'NZD', 'THB', 'MYR', 'PHP',
  'IDR', 'VND', 'BTC', 'ETH', 'USDC', 'USDT'
]);

export type CurrencyCode = z.infer<typeof CurrencyCodeSchema>;

// Amount with currency
export const AmountSchema = z.object({
  value: z.string().regex(/^\d+(\.\d{1,8})?$/),
  currency: CurrencyCodeSchema,
});

export type Amount = z.infer<typeof AmountSchema>;

// Pagination
export const PaginationSchema = z.object({
  page: z.number().int().min(1).default(1),
  limit: z.number().int().min(1).max(100).default(20),
});

export type Pagination = z.infer<typeof PaginationSchema>;

// API Response wrapper
export const ApiResponseSchema = z.object({
  success: z.boolean(),
  data: z.any().optional(),
  error: z.string().optional(),
  message: z.string().optional(),
});

export type ApiResponse<T = any> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
};

// Paginated response
export const PaginatedResponseSchema = z.object({
  data: z.array(z.any()),
  pagination: z.object({
    page: z.number(),
    limit: z.number(),
    total: z.number(),
    totalPages: z.number(),
  }),
});

export type PaginatedResponse<T = any> = {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};

// Status enums
export const StatusSchema = z.enum(['pending', 'processing', 'completed', 'failed', 'cancelled']);
export type Status = z.infer<typeof StatusSchema>;

export const WalletTypeSchema = z.enum(['fiat', 'crypto']);
export type WalletType = z.infer<typeof WalletTypeSchema>;

export const OrderTypeSchema = z.enum(['market', 'limit']);
export type OrderType = z.infer<typeof OrderTypeSchema>;

export const ConversionTypeSchema = z.enum(['spot', 'auto_convert', 'limit']);
export type ConversionType = z.infer<typeof ConversionTypeSchema>;

// Timestamps
export const TimestampsSchema = z.object({
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Timestamps = z.infer<typeof TimestampsSchema>;
