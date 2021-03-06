import { Module } from '@nestjs/common';
import { QuotesResolver } from './quotes.resolver'
import { QuotesService } from './quotes.service';

@Module({
  imports: [],
  providers: [QuotesResolver, QuotesService],
  exports: []
})
export class QuotesModule {}
