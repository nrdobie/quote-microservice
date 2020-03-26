import { Injectable } from '@nestjs/common';
import * as data from './data/quotes.json'
import { Quote } from './models/quote.model';

@Injectable()
export class QuotesService {
  public getRandomQuote(): Quote {
    const cloneArray = [...data]
    cloneArray.sort(() => Math.round((Math.random() * 2) - 1))
    return {
      id: `${Date.now().toString(16)}`,
      ...cloneArray.shift()
    }
  }
}
