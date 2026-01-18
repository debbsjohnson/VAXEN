import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { OrdersService } from './orders.service';

@ApiTags('orders')
@Controller('orders')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('open')
  @ApiOperation({ summary: 'Get open orders' })
  @ApiResponse({ status: 200, description: 'Open orders retrieved' })
  async getOpenOrders(@Request() req) {
    return this.ordersService.findOpenOrders(req.user.organizationId);
  }
}
