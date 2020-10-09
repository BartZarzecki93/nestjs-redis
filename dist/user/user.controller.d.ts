import { CreateUserInput } from './dto/create-user.input';
import { User } from './entitites/user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getHello(): Promise<User[]>;
    post(data: CreateUserInput): Promise<CreateUserInput>;
}
