import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

import { join } from 'path';
import * as hbs from 'hbs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
   // Configurar Handlebars (hbs) como motor de plantillas
  app.setViewEngine('hbs');

  // Configura el directorio base donde se encuentran las vistas
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();