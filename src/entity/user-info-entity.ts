import { prop } from '@typegoose/typegoose';

export class UserInfoEntity {

    @prop()
    username: string;

    @prop()
    password: string;

    @prop()
    phone: string;

    @prop()
    email: string;

    @prop() 
    phoneModel: string;
    
    @prop()   
    roleId: string;
}

