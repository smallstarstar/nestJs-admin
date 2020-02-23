import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class StoreInfo {

    @ApiProperty({name: 'name'})
    @IsNotEmpty({message:'不能为空'})
    name: string;

    @ApiProperty({name: 'type'})
    @IsNotEmpty({message:'不能为空'})
    type: string;

    @ApiProperty({name: 'subtype'})
    @IsNotEmpty({message:'不能为空'})
    subtype: string;

    @ApiProperty({name: 'place'})
    @IsNotEmpty({message:'不能为空'})
    place: string;


    @ApiProperty({name: 'count'})
    @IsNotEmpty({message:'不能为空'})
    count: number;

    @ApiProperty({name: 'person'})
    @IsNotEmpty({message:'不能为空'})
    person: string;

    @ApiProperty({name: 'personId'})
    @IsNotEmpty({message:'不能为空'})
    personId: string;

    
    @ApiProperty({name: 'cTime'})
    @IsNotEmpty({message:'不能为空'})
    cTime: number;

    
}