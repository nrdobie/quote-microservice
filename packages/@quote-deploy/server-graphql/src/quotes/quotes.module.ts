import { Module } from '@nestjs/common';
import { QuotesResolver } from './quotes.resolver'

@Module({
  imports: [],
  providers: [QuotesResolver],
  exports: []
})
export class QuotesModule {}
