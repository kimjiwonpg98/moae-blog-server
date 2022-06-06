import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TypeOrmConfigService } from './typeorm/typeormConfig.service';
import * as fs from 'fs';
import * as compression from 'compression';
import { ConfigModule } from '@nestjs/config';
import * as express from 'express';
import CatchException from './error/CatchExceptions';

async function bootstrap() {
  await makeOrmConfig();

  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      skipMissingProperties: true,
      transform: true,
    }),
  );

  app.useGlobalFilters(new CatchException());

  ConfigModule.forRoot({
    isGlobal: true,
  });

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(compression());
  app.setGlobalPrefix('moae/api');

  await app.listen(process.env.PORT);
}

async function makeOrmConfig() {
  const typeOrmConfigService = new TypeOrmConfigService(process.env);
  const typeOrmConfig = typeOrmConfigService.getTypeOrmConfig();

  if (fs.existsSync('ormconfig.json')) {
    fs.unlinkSync('ormconfig.json');
  }

  fs.writeFileSync('ormconfig.json', JSON.stringify(typeOrmConfig, null, 2));
}
bootstrap();
