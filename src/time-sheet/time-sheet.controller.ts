import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { TimeSheetService } from './time-sheet.service';

@Controller('/api/v1')
@ApiTags('流水账信息接口')
export class TimeSheetController {
    constructor(private timeSheetService: TimeSheetService) { }

    @Get('/timesheet/list')
    @ApiOperation({ summary: '获取所有流水账信息' })
    getTimeSheetList() {
        return this.timeSheetService.getTimeSheetListInfo();
    }


    @Get('/timesheetlistByPerId/:personId')
    @ApiOperation({ summary: '根据personId获取流水账信息' })
    getTimesheetInfo(@Query('personId') personId: string) {
        return this.timeSheetService.getTimesheetInfoByPersonId(personId);
    }
}
