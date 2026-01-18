import { Injectable } from '@nestjs/common';
import { ComplianceProvider } from '../providers/adapters/compliance.provider';

@Injectable()
export class KybService {
  constructor(private complianceProvider: ComplianceProvider) {}

  async submitKyb(data: any) {
    return this.complianceProvider.submitKyb(data);
  }
}
