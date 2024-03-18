export interface User {
    firstName: string,
    lastName: string,
    email: string,
    password: string
    role: 'user' | 'admin'
}

export const users: User[] = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        password: 'password',
        role: 'user'
    },
    {
        firstName: 'Alice',
        lastName: 'Smith',
        email: 'alicesmith@gmail.com',
        password: 'password',
        role: 'user'
    },
    {
        firstName: 'Bob',
        lastName: 'Johnson',
        email: 'bobjohnson@gmail.com',
        password: 'password',
        role: 'admin'
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        password: 'password',
        role: 'admin'
    }
];
