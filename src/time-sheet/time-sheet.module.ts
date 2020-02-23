import { Module } from '@nestjs/common';
import { TimeSheetService } from './time-sheet.service';
import { TimeSheetController } from './time-sheet.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { TimeSheetEntity } from 'src/entity/time-sheet-entity';

@Module({
  imports:[
    TypegooseModule.forFeature([TimeSheetEntity])
  ],
  providers: [TimeSheetService],
  controllers: [TimeSheetController]
})
export class TimeSheetModule {}
