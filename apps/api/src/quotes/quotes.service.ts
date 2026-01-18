import { Injectable } from '@nestjs/common';
import { LiquidityProvider } from '../providers/adapters/liquidity.provider';
import { QuoteRequestSchema } from '@vaxen/types';

@Injectable()
export class QuotesService {
  constructor(private liquidityProvider: LiquidityProvider) {}

  async getQuote(data: QuoteRequestSchema) {
    return this.liquidityProvider.getQuote(data);
  }
}
