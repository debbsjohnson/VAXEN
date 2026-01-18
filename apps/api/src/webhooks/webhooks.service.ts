import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WebhooksService {
  constructor(private prisma: PrismaService) {}

  async processWebhook(provider: string, eventType: string, payload: any) {
    // Mock webhook processing
    console.log(`Processing webhook from ${provider}: ${eventType}`, payload);
    
    return this.prisma.webhookEvent.create({
      data: {
        organizationId: 'mock-org-id',
        provider,
        eventType,
        payload: payload as any,
        status: 'PROCESSED',
        processedAt: new Date(),
      },
    });
  }
}
