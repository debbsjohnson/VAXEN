import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async getSystemStats() {
    const [orgCount, userCount, transactionCount] = await Promise.all([
      this.prisma.organization.count(),
      this.prisma.user.count(),
      this.prisma.walletTransaction.count(),
    ]);

    return {
      totalOrganizations: orgCount,
      totalUsers: userCount,
      totalTransactions: transactionCount,
      systemHealth: 'healthy',
    };
  }
}
