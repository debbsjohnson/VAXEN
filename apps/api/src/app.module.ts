import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { BullModule } from '@nestjs/bull';
import { ScheduleModule } from '@nestjs/schedule';

import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { KybModule } from './kyb/kyb.module';
import { WalletsModule } from './wallets/wallets.module';
import { AccountsModule } from './accounts/accounts.module';
import { QuotesModule } from './quotes/quotes.module';
import { ConversionsModule } from './conversions/conversions.module';
import { OrdersModule } from './orders/orders.module';
import { BeneficiariesModule } from './beneficiaries/beneficiaries.module';
import { PayoutsModule } from './payouts/payouts.module';
import { CryptoModule } from './crypto/crypto.module';
import { StatementsModule } from './statements/statements.module';
import { ReportsModule } from './reports/reports.module';
import { WebhooksModule } from './webhooks/webhooks.module';
import { AdminModule } from './admin/admin.module';
import { AuditModule } from './audit/audit.module';
import { ProvidersModule } from './providers/providers.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 100,
    }]),
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6379'),
        password: process.env.REDIS_PASSWORD,
      },
    }),
    ScheduleModule.forRoot(),
    PrismaModule,
    AuthModule,
    OrganizationsModule,
    KybModule,
    WalletsModule,
    AccountsModule,
    QuotesModule,
    ConversionsModule,
    OrdersModule,
    BeneficiariesModule,
    PayoutsModule,
    CryptoModule,
    StatementsModule,
    ReportsModule,
    WebhooksModule,
    AdminModule,
    AuditModule,
    ProvidersModule,
    HealthModule,
  ],
})
export class AppModule {}
