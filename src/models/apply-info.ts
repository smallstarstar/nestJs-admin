import { PersonInfo } from "./person-info";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

/**
 * 申请model
 */

export class ApplyInfo {
    @ApiProperty({ name: 'personId' })
    @IsNotEmpty({ message: '不能为空' })
    personId: string;

    @ApiProperty({ name: 'personInfo' })
    @IsNotEmpty({ message: '不能为空' })
    personInfo: PersonInfo;

    @ApiProperty({ name: 'type' })
    @IsNotEmpty({ message: '不能为空' })
    type: string;

    @ApiProperty({ name: 'objName' })
    @IsNotEmpty({ message: '不能为空' })
    objName: string;

    @ApiProperty({ name: 'status' })
    @IsNotEmpty({ message: '不能为空' })
    status: number;
  
    @ApiProperty({ name: 'reason' })
    @IsNotEmpty({ message: '不能为空' })
    reason: number;

    @ApiProperty({ name: 'applyTime' })
    @IsNotEmpty({ message: '不能为空' })
    applyTime: Date;

    @ApiProperty({ name: 'endTime' })
    @IsNotEmpty({ message: '不能为空' })
    endTime: Date;
}