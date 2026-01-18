import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuditService {
  constructor(private prisma: PrismaService) {}

  async log(action: string, resource: string, resourceId: string, userId: string, organizationId: string, details?: any) {
    return this.prisma.auditLog.create({
      data: {
        action,
        resource,
        resourceId,
        userId,
        organizationId,
        details: details as any,
      },
    });
  }

  async findByOrganization(organizationId: string) {
    return this.prisma.auditLog.findMany({
      where: { organizationId },
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
  }
}
