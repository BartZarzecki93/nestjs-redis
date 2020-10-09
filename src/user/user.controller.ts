import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entitites/user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @MessagePattern('get')
    async getHello(): Promise<User[]> {
        return this.userService.getHello()
    }

    @MessagePattern('add')
    async post(data: CreateUserInput): Promise<CreateUserInput> {
        return this.userService.post(data)
    }
}