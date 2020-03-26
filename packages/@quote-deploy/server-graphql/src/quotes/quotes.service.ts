import { Injectable, OnApplicationBootstrap, Logger } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices'
import { Quote } from './models/quote.model';
import { Observable } from 'rxjs'

@Injectable()
export class QuotesService implements OnApplicationBootstrap {
  @Client({
    transport: Transport.TCP,
    options: {
      port: 3001
    }
  })
  private client: ClientProxy

  private logger = new Logger('QuotesService')

  async onApplicationBootstrap() {
    await this.client.connect()
  }

  public getRandomQuote(): Observable<Quote> {
    this.logger.debug('Getting quote from microservice...')
    return this.client.send<Quote>('getRandomQuote', {})
  }
}
