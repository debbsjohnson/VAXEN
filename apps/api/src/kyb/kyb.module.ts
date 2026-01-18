import { Module } from '@nestjs/common';
import { KybService } from './kyb.service';
import { KybController } from './kyb.controller';

@Module({
  providers: [KybService],
  controllers: [KybController],
  exports: [KybService],
})
export class KybModule {}
