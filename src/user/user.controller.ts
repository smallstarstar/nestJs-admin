import { Controller, Get, Param, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserInfo } from '../models/user-info';

@Controller('/api/v1')
@ApiTags('用户信息')
export class UserController {
    constructor(private userService: UserService) { }

    @Get('/username/:userName/password/:password')
    @ApiOperation({ summary: '用户登录' })
    userLogins(@Param('userName') userName: string, @Param('password') password: string) {
        return this.userService.userLogin(userName, password);
    }

    @Get('/userlist')
    @ApiOperation({ summary: '获取所有用户' })
    getUserInfoListMessage() {
        return this.userService.getUserInfoList();
    }

    @Get(':id')
    @ApiOperation({ summary: '根据用户的id获取用户信息' })
    search(@Query('id') id: string) {
        return this.userService.findUserInfoByUserId(id);
    }

    @Post('/save')
    @ApiOperation({ summary: '用户注册' })
    saveUserInfoMessage(@Body() userInfo: UserInfo) {
        return this.userService.saveUserInfo(userInfo);
    }

    @Put(':id')
    @ApiOperation({ summary: '修改用户信息' })
    update(@Param('id') id: string, @Body() userInfo: UserInfo) {
        return this.userService.upDateUserInfoById(id, userInfo);
    }

    @Delete(':id')
    @ApiOperation({ summary: '删除用户信息' })
    deleteUserInfoById(@Param('id') id: string) {
        return this.userService.delteUserInfoById(id);
    }

    @Get('/getUserInfoBypageAndSize/:page/:size')
    @ApiOperation({ summary: '分页获取用户的数据' })
    getuserListByPageAndSize(@Param('page') page: number, @Param('size') size: number) {
        return this.userService.getUserInfoListByPageAndSize(page, size);
    }
}
