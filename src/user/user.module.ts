import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entitites/user.entity';
import { UserController } from './user.controller'
import { UserRepository } from './user.repository';

@Module({
    imports: [TypeOrmModule.forFeature([User, UserRepository])],
    providers: [UserService],
    controllers: [UserController],
})
export class UsersModule { }
