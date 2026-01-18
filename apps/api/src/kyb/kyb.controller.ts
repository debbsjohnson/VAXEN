import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { KybService } from './kyb.service';

@ApiTags('kyb')
@Controller('kyb')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class KybController {
  constructor(private kybService: KybService) {}

  @Post('submit')
  @ApiOperation({ summary: 'Submit KYB documents' })
  @ApiResponse({ status: 200, description: 'KYB submitted' })
  async submitKyb(@Body() data: any) {
    return this.kybService.submitKyb(data);
  }
}
