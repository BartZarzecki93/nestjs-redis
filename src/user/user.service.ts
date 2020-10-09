import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { User } from './entitites/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';


@Injectable()
export class UserService {

    private client: ClientProxy;

    constructor(@InjectRepository(User)
    private usersRepository: Repository<User>,) {
        this.client = ClientProxyFactory.create({
            transport: Transport.REDIS,
            options: {
                url: 'redis://localhost:6379',
            }
        });
    }

    public async getHello() {

        const users = await this.usersRepository.find();

        return users
    }
    public async post(data: CreateUserInput) {

        const userObject = new User()
        userObject.name = data.name;
        userObject.surname = data.surname;
        userObject.address = data.address;

        const user = await this.usersRepository.save(userObject)

        return user
    }
}
