import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CryptoService } from './crypto.service';

@ApiTags('crypto')
@Controller('crypto')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class CryptoController {
  constructor(private cryptoService: CryptoService) {}

  @Post('deposit-address')
  @ApiOperation({ summary: 'Generate crypto deposit address' })
  @ApiResponse({ status: 200, description: 'Deposit address generated' })
  async generateDepositAddress(@Body() data: any) {
    return this.cryptoService.generateDepositAddress(data);
  }
}
