import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { StatementsService } from './statements.service';

@ApiTags('statements')
@Controller('statements')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class StatementsController {
  constructor(private statementsService: StatementsService) {}

  @Get()
  @ApiOperation({ summary: 'Get statements' })
  @ApiResponse({ status: 200, description: 'Statements retrieved' })
  async getStatements(@Request() req) {
    return this.statementsService.findByOrganization(req.user.organizationId);
  }
}
