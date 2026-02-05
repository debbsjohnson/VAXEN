import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { QuotesService } from './quotes.service';
import { QuoteRequest } from '@vaxen/types';

@ApiTags('quotes')
@Controller('quotes')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class QuotesController {
  constructor(private quotesService: QuotesService) {}

  @Post()
  @ApiOperation({ summary: 'Get currency conversion quote' })
  @ApiResponse({ status: 200, description: 'Quote generated successfully' })
  async getQuote(@Body() data: QuoteRequest) {
    return this.quotesService.getQuote(data);
  }
}
