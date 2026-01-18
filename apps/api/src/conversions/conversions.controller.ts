import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ConversionsService } from './conversions.service';
import { CreateConversionRequestSchema } from '@vaxen/types';

@ApiTags('conversions')
@Controller('conversions')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class ConversionsController {
  constructor(private conversionsService: ConversionsService) {}

  @Post()
  @ApiOperation({ summary: 'Create conversion order' })
  @ApiResponse({ status: 201, description: 'Conversion order created' })
  async createConversion(@Request() req, @Body() data: CreateConversionRequestSchema) {
    return this.conversionsService.create({
      ...data,
      organizationId: req.user.organizationId,
    });
  }
}
