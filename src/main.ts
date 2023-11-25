import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';

//swager:
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');



async function bootstrap() {
  const app = await NestFactory.create(RootModule);

  const config = new DocumentBuilder()
    .setTitle('BOOK EXAMPLE ')
    .setDescription('The bOOKS API description')
    .setVersion('1.0')
    .addTag('BOOKS')
    .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-docs', app, document);  //need to hit /api-docs to access swagger
    app.useGlobalPipes(new ValidationPipe());

  //this should be added to enable validation globally:
  await app.listen(3000);
}
bootstrap();
