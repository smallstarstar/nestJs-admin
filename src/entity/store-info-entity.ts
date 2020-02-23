import { prop } from '@typegoose/typegoose';

export class StoreInfoEntity {

    // 名称
    @prop()
    storeName: string;

    // 类型
    @prop()
    type: string;

    // 子类型
    @prop()
    subtype: string;

    // 位置
    @prop()
    place: string;

    // 库存
    @prop()
    count: number;

    
    // 添加人
    @prop()
    person: string;

    // 添加人
    @prop()
    personId: string;

    // 创建时间
    @prop()
    cTime: number;

}