import { prop } from "@typegoose/typegoose";


export class ApplyEntity {
    @prop()
    personId: string;

    @prop()
    type: string;

    @prop()
    status: number;
    @prop()
    objName: string;

    @prop()
    reason: string;

    @prop()
    applyTime: Date;

    @prop()
    endTime: Date;
}

