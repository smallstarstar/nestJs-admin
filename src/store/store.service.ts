import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { StoreInfoEntity } from 'src/entity/store-info-entity';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { StoreInfo } from 'src/models/store-info';
import { PageBean } from 'src/models/page-bean';
import MESSAGEKEY from 'src/common/message-key';
import { TimeSheetService } from 'src/time-sheet/time-sheet.service';

@Injectable()
export class StoreService {
    constructor(
        @InjectModel(StoreInfoEntity) private readonly storeInfoEntity: ModelType<StoreInfoEntity>,
        private readonly timeSheetService: TimeSheetService
        ) { }
    // 保存仓库资料信息接口
    async saveStoreInterface(storeInfo: StoreInfo) {
        storeInfo.cTime = (new Date()).getTime();
        // 添加流水记录
        this.timeSheetService.saveTimeSheet(storeInfo.person, storeInfo.personId, MESSAGEKEY.SAVE_STORE_INFO, storeInfo);
        return await this.storeInfoEntity.create(storeInfo);
    }
    // 分页获取数据
    async getStoreInfoByPageAndSize(page: number, size: number) {
        const pageBean = new PageBean();
        const skip = (page - 1) * size;
        pageBean.total = await this.storeInfoEntity.countDocuments();
        pageBean.list = await this.storeInfoEntity.find().limit(+size).skip(+skip).sort({ _id: 1 });
        return pageBean;
    }
}