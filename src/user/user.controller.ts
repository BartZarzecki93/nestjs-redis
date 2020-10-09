import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Get()
    async getUsers() {
        return await this.userService.getUsers();
    }

    @Post()
    async create(@Body() userDto: CreateUserInput) {
        return await this.userService.createUsers(userDto);;
    }
}