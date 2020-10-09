import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entitites/user.entity';
import { UsersModule } from './user/user.module'

@Module({
  imports: [TypeOrmModule.forRoot({
    name: 'default',
    type: "postgres",
    host:"127.0.0.1",
    username: "postgres",
    password: "postgres",
    port: 5432,
    database: "postgres",
    dropSchema: false,
    entities: [User],
    migrationsRun: true,
    synchronize: true,
    logging: false,
    migrations: [
      "./migration/**/*.ts"
    ],
    cli: {
      entitiesDir: "./user/entities/",
      migrationsDir: "./migration"
    }
  }),
    UsersModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
