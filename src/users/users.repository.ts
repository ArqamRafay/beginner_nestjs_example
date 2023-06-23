import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
    create(email: string, password: string) {
        return {
            id: 1,
            email: email
        }
    }
    getAllUsers() {
        return [{
            id: 1,
            email: 'arqam.rafay@gmail.com'
        }, {
            id: 2,
            email: 'arqam@gmail.com'
        }]
    }
}