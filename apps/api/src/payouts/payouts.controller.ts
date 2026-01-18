import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { PayoutsService } from './payouts.service';
import { CreatePayoutRequestSchema } from '@vaxen/types';

@ApiTags('payouts')
@Controller('payouts')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class PayoutsController {
  constructor(private payoutsService: PayoutsService) {}

  @Post()
  @ApiOperation({ summary: 'Create payout' })
  @ApiResponse({ status: 201, description: 'Payout created' })
  async createPayout(@Request() req, @Body() data: CreatePayoutRequestSchema) {
    return this.payoutsService.create({
      ...data,
      organizationId: req.user.organizationId,
    });
  }
}
