import { Resolver, Query } from '@nestjs/graphql'
import { Quote } from './models/quote.model'

@Resolver(of => Quote)
export class QuotesResolver {
  constructor() {}

  @Query(returns => Quote)
  async randomQuote() {
    return {id: 1, quote: 'RANDOM', author: 'RANDY'};
  }
}
