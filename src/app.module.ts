import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { StoreModule } from './store/store.module';
import { TimeSheetModule } from './time-sheet/time-sheet.module';
import { ApplyModule } from './apply/apply.module';


@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:10002/admin-test', {
      useNewUrlParser: true
    }),
    UserModule,
    StoreModule,
    TimeSheetModule,
    ApplyModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
