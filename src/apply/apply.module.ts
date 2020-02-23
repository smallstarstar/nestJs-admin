import { Module } from '@nestjs/common';
import { ApplyController } from './apply.controller';
import { ApplyService } from './apply.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { ApplyEntity } from 'src/entity/apply-entity';
import { TimeSheetService } from 'src/time-sheet/time-sheet.service';
import { TimeSheetEntity } from 'src/entity/time-sheet-entity';

@Module({
  imports:[
    TypegooseModule.forFeature([ApplyEntity,TimeSheetEntity])
  ],
  controllers: [ApplyController],
  providers: [ApplyService,TimeSheetService]
})
export class ApplyModule {}
