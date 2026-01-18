import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AccountsService } from './accounts.service';

@ApiTags('accounts')
@Controller('accounts')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class AccountsController {
  constructor(private accountsService: AccountsService) {}

  @Get('named')
  @ApiOperation({ summary: 'Get named accounts' })
  @ApiResponse({ status: 200, description: 'Named accounts retrieved' })
  async getNamedAccounts(@Request() req) {
    return this.accountsService.findByOrganization(req.user.organizationId);
  }
}
