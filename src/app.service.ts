import { Injectable } from '@nestjs/common';



/**
 * 操作数据库以及业务逻辑服务
 */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}