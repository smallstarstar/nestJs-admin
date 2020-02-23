import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ApplyEntity } from 'src/entity/apply-entity';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { ApplyInfo } from 'src/models/apply-info';
import { TimeSheetService } from 'src/time-sheet/time-sheet.service';
import MESSAGEKEY from 'src/common/message-key';

@Injectable()
export class ApplyService {
    constructor(
        @InjectModel(ApplyEntity) private readonly applyEntity: ModelType<ApplyEntity>,
        private timeSheetService: TimeSheetService
    ) { }

    async saveApplyInfo(applyInfo: ApplyInfo) {
        await this.applyEntity.create(applyInfo);
        // 记录流水账
        await this.timeSheetService.saveTimeSheet(
            applyInfo.personInfo.personName,
            applyInfo.personId,
            MESSAGEKEY.SNED_APPLY_STORE,
            applyInfo);
    }
} 