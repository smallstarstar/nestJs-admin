import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// api文档插件
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import * as mongoose from 'mongoose';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // 连接数据库这种操作方式不利于解耦数据
  // mongoose.connect('mongodb://localhost:10001/demo', {
  //   useCreateIndex: true,
  //   useFindAndModify: true,
  //   useNewUrlParser: true
  // });

  const app = await NestFactory.create(AppModule);

  // 验证管道  npm i class-validator class-transformer --save
  app.useGlobalPipes(new ValidationPipe)
  const options = new DocumentBuilder()
    .setTitle('nest接口')
    .setDescription('使用nest书写的常用性接口')
    .setVersion('1.0.0')
    .addTag('用户,安全')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  // 访问swagger地址是localhost:5000/swagger;
  SwaggerModule.setup('/swagger', app, document);
  await app.listen(5000);
}
bootstrap();