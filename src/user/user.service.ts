import { Injectable } from '@nestjs/common';
import { UserInfoEntity } from '../entity/user-info-entity';
import { InjectModel } from 'nestjs-typegoose';
import { UserInfo } from '../models/user-info'
import { ModelType } from '@typegoose/typegoose/lib/types';
import { PageBean } from '../models/page-bean';

/**
 * 操作数据库以及业务逻辑服务
 */
@Injectable()
export class UserService {
    constructor(
        @InjectModel(UserInfoEntity) private readonly userInfoEntity: ModelType<UserInfoEntity>
    ) { }
    // 用户登录
    async userLogin(username: string, password: string) {
        const data = await this.userInfoEntity.findOne({ username: username, password: password });
        return data;
    }
    // 保存用户信息
    async saveUserInfo(userInfo: UserInfo) {
        return await this.userInfoEntity.create(userInfo);
    }
    // 获取全部信息
    async  getUserInfoList() {
        return await this.userInfoEntity.find();
    }
    // 更新用户信息
    async upDateUserInfoById(id: string, userInfo: UserInfo) {
        return await this.userInfoEntity.findByIdAndUpdate(id, userInfo);
    }
    // 删除用户信息
    async delteUserInfoById(id: string) {
        return await this.userInfoEntity.findByIdAndDelete(id);
    }
    // 根据用户id获取用户信息
    async findUserInfoByUserId(id: string) {
        return await this.userInfoEntity.findOne({ _id: id });
    }
    // 分页获取用户数据
    async  getUserInfoListByPageAndSize(page: number, size: number) {
        const pageBean: PageBean = new PageBean();
        const skip = (page - 1) * size;
        pageBean.total = await this.userInfoEntity.countDocuments();
        pageBean.list = await this.userInfoEntity.find().limit(page - 1).skip(skip);
        return pageBean;
    }
}
