import { prop } from '@typegoose/typegoose';

export class TimeSheetEntity {
    @prop()
    cperson: string;

    @prop()
    cpersonId: string;

    @prop()
    cTime: number;

    @prop()
    messageKey: string;

    @prop()
    others: object;
}