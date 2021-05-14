import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Student example')
  .setDescription('The Student API description')
  .setVersion('1.0')
  .addTag('Student')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('/', app, document);


  await app.listen(5000);
}
bootstrap();
