import { Module } from '@nestjs/common';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { StoreInfoEntity } from 'src/entity/store-info-entity';
import { TimeSheetService } from 'src/time-sheet/time-sheet.service';
import { TimeSheetEntity } from 'src/entity/time-sheet-entity';
import { UserInfoEntity } from 'src/entity/user-info-entity';

@Module({
  imports: [TypegooseModule.forFeature([StoreInfoEntity, TimeSheetEntity, UserInfoEntity])],
  controllers: [StoreController],
  providers: [StoreService, TimeSheetService]
})
export class StoreModule { }
