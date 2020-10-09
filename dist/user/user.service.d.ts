import { Repository } from 'typeorm';
import { User } from './entitites/user.entity';
import { CreateUserInput } from './dto/create-user.input';
export declare class UserService {
    private usersRepository;
    private client;
    constructor(usersRepository: Repository<User>);
    getHello(): Promise<User[]>;
    post(data: CreateUserInput): Promise<User>;
}
