import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path'
import { QuotesModule } from './quotes/quotes.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(__dirname, '../src/schema.gql'),
    }),
    QuotesModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
