import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProvidersService {
  constructor(private configService: ConfigService) {}

  getProviderConfig(provider: string) {
    const configs = {
      airwallex: {
        apiKey: this.configService.get('AIRWALLEX_API_KEY'),
        secret: this.configService.get('AIRWALLEX_SECRET'),
        baseUrl: this.configService.get('AIRWALLEX_BASE_URL', 'https://api.airwallex.com'),
      },
      privy: {
        appId: this.configService.get('PRIVY_APP_ID'),
        secret: this.configService.get('PRIVY_SECRET'),
        baseUrl: this.configService.get('PRIVY_BASE_URL', 'https://auth.privy.io'),
      },
      coinbase: {
        apiKey: this.configService.get('COINBASE_API_KEY'),
        secret: this.configService.get('COINBASE_SECRET'),
        baseUrl: this.configService.get('COINBASE_BASE_URL', 'https://api.exchange.coinbase.com'),
      },
      kraken: {
        apiKey: this.configService.get('KRAKEN_API_KEY'),
        secret: this.configService.get('KRAKEN_SECRET'),
        baseUrl: this.configService.get('KRAKEN_BASE_URL', 'https://api.kraken.com'),
      },
      sumsub: {
        apiKey: this.configService.get('SUMSUB_API_KEY'),
        secret: this.configService.get('SUMSUB_SECRET'),
        baseUrl: this.configService.get('SUMSUB_BASE_URL', 'https://api.sumsub.com'),
      },
    };

    return configs[provider] || {};
  }

  isProviderEnabled(provider: string): boolean {
    const config = this.getProviderConfig(provider);
    return !!(config.apiKey && config.secret);
  }
}
