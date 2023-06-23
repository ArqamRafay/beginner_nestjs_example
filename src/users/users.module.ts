import { Module } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

// Decorator that marks a class as a module.
@Module({
    controllers: [UsersController],
    providers: [UsersService, UsersRepository],
})
export class UsersModule { }