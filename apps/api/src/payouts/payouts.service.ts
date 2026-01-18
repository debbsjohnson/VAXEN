import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PayoutsService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    return this.prisma.payout.create({
      data: {
        organizationId: data.organizationId,
        type: data.type,
        amount: data.amount,
        currency: data.currency,
        beneficiaryId: data.beneficiaryId,
        reference: data.reference,
        description: data.description,
      },
    });
  }
}
