import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common'
import { Transport, TcpOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

const logger = new Logger('Main')

async function bootstrap() {
  const app = await NestFactory.createMicroservice<TcpOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3001
      }
    },
  );
  await app.listen(() => logger.log(`Quotes Microservice ready at localhost:3001`));
}
bootstrap();
