import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrganizationRequestSchema, UpdateOrganizationRequestSchema } from '@vaxen/types';

@Injectable()
export class OrganizationsService {
  constructor(private prisma: PrismaService) {}

  async findById(id: string) {
    return this.prisma.organization.findUnique({
      where: { id },
      include: {
        users: true,
        wallets: true,
      },
    });
  }

  async create(data: CreateOrganizationRequestSchema) {
    return this.prisma.organization.create({
      data: {
        ...data,
        address: data.address as any,
        settings: {},
      },
    });
  }

  async update(id: string, data: UpdateOrganizationRequestSchema) {
    return this.prisma.organization.update({
      where: { id },
      data: {
        ...data,
        address: data.address as any,
      },
    });
  }

  async updateKybStatus(id: string, status: string) {
    return this.prisma.organization.update({
      where: { id },
      data: {
        kybStatus: status as any,
        kybApprovedAt: status === 'APPROVED' ? new Date() : null,
      },
    });
  }
}
