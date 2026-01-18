import { Controller, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { WebhooksService } from './webhooks.service';

@ApiTags('webhooks')
@Controller('webhooks')
export class WebhooksController {
  constructor(private webhooksService: WebhooksService) {}

  @Post('provider/:provider')
  @ApiOperation({ summary: 'Process provider webhook' })
  @ApiResponse({ status: 200, description: 'Webhook processed' })
  async processWebhook(@Param('provider') provider: string, @Body() payload: any) {
    return this.webhooksService.processWebhook(provider, payload.type, payload);
  }
}
