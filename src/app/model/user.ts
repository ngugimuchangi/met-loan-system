import { v4 as uuid } from 'uuid';

export type UserRole = 'user' | 'admin';
export type GenderOptions = 'male' | 'female' | 'other';

export class User {
    constructor(
        public id: string = uuid(),
        public firstName: string,
        public lastName: string,
        public gender: GenderOptions,
        public dob: Date,
        public phoneNumber: string = '',
        public email: string,
        public password: string = '',
        public addressLine1: string = '',
        public addressLine2: string = '',
        public role: UserRole = 'user',
    ) { }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
