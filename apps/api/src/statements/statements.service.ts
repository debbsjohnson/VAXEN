import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StatementsService {
  constructor(private prisma: PrismaService) {}

  async findByOrganization(organizationId: string) {
    return this.prisma.statementFile.findMany({
      where: { organizationId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
