import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async findOpenOrders(organizationId: string) {
    return this.prisma.limitOrder.findMany({
      where: { 
        organizationId,
        status: 'PENDING',
      },
    });
  }
}
