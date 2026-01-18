import { Controller, Get, Post, Body, UseGuards, Request, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { WalletsService } from './wallets.service';
import { CreateWalletRequestSchema } from '@vaxen/types';

@ApiTags('wallets')
@Controller('wallets')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class WalletsController {
  constructor(private walletsService: WalletsService) {}

  @Get()
  @ApiOperation({ summary: 'Get organization wallets' })
  @ApiResponse({ status: 200, description: 'Wallets retrieved successfully' })
  async getWallets(@Request() req) {
    return this.walletsService.findByOrganization(req.user.organizationId);
  }

  @Post()
  @ApiOperation({ summary: 'Create new wallet' })
  @ApiResponse({ status: 201, description: 'Wallet created successfully' })
  async createWallet(@Request() req, @Body() data: CreateWalletRequestSchema) {
    return this.walletsService.create(req.user.organizationId, data);
  }

  @Get(':id/transactions')
  @ApiOperation({ summary: 'Get wallet transactions' })
  @ApiResponse({ status: 200, description: 'Transactions retrieved successfully' })
  async getWalletTransactions(@Request() req, @Param('id') id: string) {
    return this.walletsService.getTransactions(id);
  }
}
