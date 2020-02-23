import { ApiProperty } from "@nestjs/swagger";

/**
 * 人员model
 */

export class PersonInfo {
    @ApiProperty({name: 'personName'})
    personName: string;
    @ApiProperty({name: 'personId'})
    personId: string;
    @ApiProperty({name: 'role'})
    role: string;
}