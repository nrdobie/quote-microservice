import { Injectable, OnApplicationBootstrap, Logger } from '@nestjs/common'
import { Client, ClientProxy, Transport } from '@nestjs/microservices'
import { Quote } from './models/quote.model'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { performance } from 'perf_hooks'
import { round } from 'lodash'

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
    const start = performance.now()
    return this.client
      .send<Quote>('getRandomQuote', {})
      .pipe(
        tap(quote =>
          this.logger.debug(
            `Quote ${quote.id} retrieved in ${round(
              performance.now() - start,
              3
            )}ms`
          )
        )
      )
  }
}
