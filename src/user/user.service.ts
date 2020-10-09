import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { User } from './entitites/user.entity';
import { CreateUserInput } from './dto/create-user.input';


@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async getUsers() {

        const users = await this.userRepository.find();

        return users;
    }

    async createUsers(createUserInput: CreateUserInput) {

        const userObject = new User()
        userObject.name = createUserInput.name;
        userObject.surname = createUserInput.surname;
        userObject.address = createUserInput.address;

        const user = await this.userRepository.save(userObject)


        return user
    }
}
