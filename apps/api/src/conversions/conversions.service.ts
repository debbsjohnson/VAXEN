import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ConversionsService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    return this.prisma.conversionOrder.create({
      data: {
        organizationId: data.organizationId,
        fromCurrency: data.fromCurrency,
        toCurrency: data.toCurrency,
        fromAmount: data.fromAmount,
        toAmount: data.toAmount,
        rate: data.rate,
        fee: data.fee,
        type: data.type,
        limitPrice: data.limitPrice,
      },
    });
  }
}
