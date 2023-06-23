import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Post()
    createUser(@Body() { email, password }: CreateUserDto) {
        return this.usersService.create(email, password);
    }
    @Get('/get')
    getUsers() {
        return this.usersService.getAllUsers()
        // return 'Welcome to basic nestjs project'
    }
}