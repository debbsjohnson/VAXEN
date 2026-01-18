import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWalletRequestSchema } from '@vaxen/types';

@Injectable()
export class WalletsService {
  constructor(private prisma: PrismaService) {}

  async findByOrganization(organizationId: string) {
    return this.prisma.wallet.findMany({
      where: { organizationId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string) {
    return this.prisma.wallet.findUnique({
      where: { id },
    });
  }

  async create(organizationId: string, data: CreateWalletRequestSchema) {
    return this.prisma.wallet.create({
      data: {
        organizationId,
        type: data.type,
        currency: data.currency,
      },
    });
  }

  async getTransactions(walletId: string) {
    return this.prisma.walletTransaction.findMany({
      where: { walletId },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
  }

  async updateBalance(walletId: string, amount: number, type: 'add' | 'subtract') {
    const wallet = await this.prisma.wallet.findUnique({
      where: { id: walletId },
    });

    if (!wallet) {
      throw new Error('Wallet not found');
    }

    const newBalance = type === 'add' 
      ? wallet.balance.toNumber() + amount
      : wallet.balance.toNumber() - amount;

    return this.prisma.wallet.update({
      where: { id: walletId },
      data: {
        balance: newBalance,
        availableBalance: newBalance,
      },
    });
  }
}
