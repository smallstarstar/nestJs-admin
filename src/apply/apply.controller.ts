import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ApplyService } from './apply.service';
import { ApplyInfo } from 'src/models/apply-info';

@Controller('/api/v1')
@ApiTags('物资状态类接口')
export class ApplyController {
    constructor(private applyService: ApplyService) { }

    @Post('/applyInfo')
    @ApiOperation({ summary: '申请物资接口' })
    saveApplayInfo(@Body() applayInfo: ApplyInfo) {
        return this.applyService.saveApplyInfo(applayInfo);
    }
}
