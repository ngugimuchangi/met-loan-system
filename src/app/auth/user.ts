export interface User {
    firstName: string,
    lastName: string,
    email: string,
    password: string
    role: 'user' | 'admin'
}

export const users: User[] = [];
