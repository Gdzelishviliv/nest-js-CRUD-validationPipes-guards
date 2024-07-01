import { Module } from '@nestjs/common';
import { ExpensesModule } from './expenses/expenses.module';
import { APP_GUARD } from '@nestjs/core';
import { AdminGuard } from './expenses/guards/admin.guard';

@Module({
  imports: [ExpensesModule],
  controllers: [],
  providers: [
    {
      provide:APP_GUARD,
      useClass:AdminGuard,
    }
  ],
})
export class AppModule {}
