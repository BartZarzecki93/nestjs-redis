import { User } from './entitites/user.entity';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
export declare class UserRepository extends Repository<User> {
    createUser: (userDto: CreateUserInput) => Promise<CreateUserInput & User>;
}
