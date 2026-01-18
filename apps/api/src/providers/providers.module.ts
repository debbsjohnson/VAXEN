import { Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { RailsProvider } from './adapters/rails.provider';
import { CustodyProvider } from './adapters/custody.provider';
import { LiquidityProvider } from './adapters/liquidity.provider';
import { ComplianceProvider } from './adapters/compliance.provider';

@Module({
  providers: [
    ProvidersService,
    RailsProvider,
    CustodyProvider,
    LiquidityProvider,
    ComplianceProvider,
  ],
  exports: [
    ProvidersService,
    RailsProvider,
    CustodyProvider,
    LiquidityProvider,
    ComplianceProvider,
  ],
})
export class ProvidersModule {}
