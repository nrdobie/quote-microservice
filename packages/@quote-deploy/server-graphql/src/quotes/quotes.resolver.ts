import { Resolver, Query } from '@nestjs/graphql'
import { Quote } from './models/quote.model'
import { QuotesService } from './quotes.service';

@Resolver(of => Quote)
export class QuotesResolver {
  constructor(private readonly quotesService: QuotesService) {}

  @Query(returns => Quote)
  randomQuote() {
    return this.quotesService.getRandomQuote()
  }
}
