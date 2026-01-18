import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuotesController } from './quotes.controller';
import { LiquidityProvider } from '../providers/adapters/liquidity.provider';

@Module({
  providers: [QuotesService, LiquidityProvider],
  controllers: [QuotesController],
  exports: [QuotesService],
})
export class QuotesModule {}
