import { Injectable } from '@nestjs/common';
import { CustodyProvider } from '../providers/adapters/custody.provider';

@Injectable()
export class CryptoService {
  constructor(private custodyProvider: CustodyProvider) {}

  async generateDepositAddress(data: any) {
    return this.custodyProvider.generateDepositAddress(data);
  }
}
