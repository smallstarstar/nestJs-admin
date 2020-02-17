import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserInfoEntity } from 'src/entity/user-info-entity';

@Module({
  imports:[
    TypegooseModule.forFeature([UserInfoEntity]) // 是个数组
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
