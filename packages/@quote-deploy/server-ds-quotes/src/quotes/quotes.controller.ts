import { Controller } from '@nestjs/common'
import { Quote } from './models/quote.model'
import { MessagePattern } from '@nestjs/microservices'
import { QuotesService } from './quotes.service'

@Controller()
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @MessagePattern('getRandomQuote')
  public getRandomQuote(): Quote {
    return this.quotesService.getRandomQuote()
  }
}
