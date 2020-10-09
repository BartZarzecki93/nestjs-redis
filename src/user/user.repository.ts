import { User } from './entitites/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input'

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  createUser = async (userDto: CreateUserInput) => {
    return await this.save(userDto);
  };
}