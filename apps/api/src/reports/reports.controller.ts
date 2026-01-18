import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ReportsService } from './reports.service';

@ApiTags('reports')
@Controller('reports')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Get('fx-pnl')
  @ApiOperation({ summary: 'Get FX P&L report' })
  @ApiResponse({ status: 200, description: 'FX P&L report retrieved' })
  async getFxPnl(@Request() req) {
    return this.reportsService.getFxPnl(req.user.organizationId);
  }
}
