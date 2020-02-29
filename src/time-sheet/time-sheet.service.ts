import { Injectable } from '@nestjs/common';
import { TimeSheetEntity } from 'src/entity/time-sheet-entity';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class TimeSheetService {
    constructor(@InjectModel(TimeSheetEntity) private timeSheetEntity: ModelType<TimeSheetEntity>) { }

    async getTimesheetInfoByPersonId(id: string) {
        return await this.timeSheetEntity.find({ cpersonId: id });
    }
    async saveTimeSheet(cPerson: string, cPersonId: string, messageKey: string, others?: object) {
        const timeSheetEntity = new TimeSheetEntity();
        timeSheetEntity.cperson = cPerson;
        timeSheetEntity.cpersonId = cPersonId;
        timeSheetEntity.messageKey = messageKey;
        timeSheetEntity.cTime = new Date().getTime();
        timeSheetEntity.others = others;
        return await this.timeSheetEntity.create(timeSheetEntity);
    }

    async getTimeSheetListInfo(): Promise<any[]> {
        return await this.timeSheetEntity.find();
    }
}
