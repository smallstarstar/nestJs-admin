import { Controller, Post, Body, Get, Query, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { StoreService } from './store.service';
import { StoreInfo } from 'src/models/store-info';


@Controller('/api/v1')
@ApiTags('仓库货物接口')
export class StoreController {
    constructor(private storeServices: StoreService) { }

    @Post('/saveStore')
    @ApiOperation({ summary: '保存仓库货物接口' })
    saveStoreInfo(@Body() storeInfo: StoreInfo) {
        return this.storeServices.saveStoreInterface(storeInfo);
    }

    @Get('/getInfoBypageAndSize/:page/:size')
    @ApiOperation({ summary: '分页获取仓库信息接口' })
    getStoreByPageAndSize(@Query('page') page: number, @Query('size') size: number) {
        return this.storeServices.getStoreInfoByPageAndSize(page, size);
    }

    @Delete('deleteById/:id/:perId')
    @ApiOperation({ summary: '分页获取仓库信息接口' })
    deleteStoreInfoById(@Query('id') id: string, @Query('perId') perId: string, ) {
        return this.storeServices.deleteStoreInfoById(id, perId);
    }
}
