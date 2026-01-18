import { Controller, Get, Patch, Body, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { OrganizationsService } from './organizations.service';
import { UpdateOrganizationRequestSchema } from '@vaxen/types';

@ApiTags('organizations')
@Controller('org')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class OrganizationsController {
  constructor(private organizationsService: OrganizationsService) {}

  @Get()
  @ApiOperation({ summary: 'Get organization details' })
  @ApiResponse({ status: 200, description: 'Organization details retrieved' })
  async getOrganization(@Request() req) {
    return this.organizationsService.findById(req.user.organizationId);
  }

  @Patch()
  @ApiOperation({ summary: 'Update organization' })
  @ApiResponse({ status: 200, description: 'Organization updated' })
  async updateOrganization(@Request() req, @Body() data: UpdateOrganizationRequestSchema) {
    return this.organizationsService.update(req.user.organizationId, data);
  }
}
