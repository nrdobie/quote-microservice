import { Controller } from '@nestjs/common'
import { Quote } from './models/quote.model'
import { MessagePattern } from '@nestjs/microservices'

@Controller()
export class QuotesController {
  @MessagePattern('getRandomQuote')
  public getRandomQuote(): Quote {
    return {id: '1', quote: 'BETTER', author: 'NICK'};
  }
}
