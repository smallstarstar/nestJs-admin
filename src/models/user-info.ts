import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length } from 'class-validator';

export class UserInfo {
    @ApiProperty({ name: 'username' })
    @IsNotEmpty({ message: '不可以为空' })
    username: string;

    @ApiProperty({ name: 'password' })
    @IsNotEmpty({ message: '不可以为空' })
    password: string;

    @ApiProperty({ name: 'userPhone' })
    @Length(11)
    @IsNotEmpty({ message: '不可以为空' })
    Phone: string;

    @IsNotEmpty({ message: '不可以为空' })
    @ApiProperty({ name: 'email' })
    email: string;

    @IsNotEmpty({ message: '不可以为空' })
    @ApiProperty({ name: 'phoneModel' })
    phoneModel: string;
}