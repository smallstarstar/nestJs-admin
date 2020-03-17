import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// api文档插件
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);1
  // 允许跨域
  app.enableCors();
  // 验证管道
  app.useGlobalPipes(new ValidationPipe)
  const options = new DocumentBuilder()
    .setTitle('服务接口')
    .setDescription('使用nest书写的常用性接口')
    .setVersion('1.0.0')
    .addTag('服务接口')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  // 访问swagger地址是localhost:8666/swagger;
  SwaggerModule.setup('/swagger', app, document);
  await app.listen(8666);
}
bootstrap();