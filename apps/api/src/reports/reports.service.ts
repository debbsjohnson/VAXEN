import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportsService {
  async getFxPnl(organizationId: string) {
    // Mock FX P&L report
    return {
      totalPnl: '1250.50',
      currency: 'USD',
      period: '2024-01',
      trades: [
        { pair: 'USD/EUR', pnl: '250.00' },
        { pair: 'EUR/GBP', pnl: '-150.00' },
        { pair: 'USD/BTC', pnl: '1150.50' },
      ],
    };
  }
}
