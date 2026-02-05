import { Injectable } from '@nestjs/common';
import { LiquidityProvider } from '../providers/adapters/liquidity.provider';
import { QuoteRequest } from '@vaxen/types';

@Injectable()
export class QuotesService {
  constructor(private liquidityProvider: LiquidityProvider) {}

  async getQuote(data: QuoteRequest) {
    return this.liquidityProvider.getQuote(data);
  }
}
