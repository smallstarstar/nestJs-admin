import { prop } from '@typegoose/typegoose'

export class UserInfoEntity {

    @prop()
    username: string;

    @prop()
    password: string;

    @prop()
    Phone: string;

    @prop()
    email: string;

    @prop() 
    phoneModel: string;
}
