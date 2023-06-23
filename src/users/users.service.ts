import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()   // class decorator
export class UsersService {
    constructor(private usersRepository: UsersRepository) { }

    create(email: string, password: string) {
        // hash Password 
        /// etc 
        return this.usersRepository.create(email, password);
    }
    getAllUsers() {
        return this.usersRepository.getAllUsers();
    }
}