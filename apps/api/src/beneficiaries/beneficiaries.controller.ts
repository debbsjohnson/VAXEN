import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { BeneficiariesService } from './beneficiaries.service';

@ApiTags('beneficiaries')
@Controller('beneficiaries')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class BeneficiariesController {
  constructor(private beneficiariesService: BeneficiariesService) {}

  @Get()
  @ApiOperation({ summary: 'Get beneficiaries' })
  @ApiResponse({ status: 200, description: 'Beneficiaries retrieved' })
  async getBeneficiaries(@Request() req) {
    return this.beneficiariesService.findByOrganization(req.user.organizationId);
  }
}
