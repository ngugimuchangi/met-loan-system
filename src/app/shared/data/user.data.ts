import { User } from '../../model/user';

const usersDetails: Omit<User, 'fullName'>[] = [
    {
        id: 'USR-62d85332-34fa-4ea6-8d40-0cbafb991c16',
        firstName: 'John',
        lastName: 'Doe',
        gender: 'male',
        dob: new Date('1990-01-01T00:00:00.000Z'),
        email: 'johndoe@gmail.com',
        phoneNumber: '(457) 433-7090 x982',
        password: 'password',
        addressLine1: "34158 Pouros Valley",
        addressLine2: "44498 Predovic Hills",
        role: 'user'
    },
    {
        id: 'USR-b381ca80-e618-4676-8eac-002db544ba70',
        firstName: 'Alice',
        lastName: 'Smith',
        gender: 'female',
        dob: new Date("1991-06-02T04:19:00.715Z"),
        email: 'alicesmith@gmail.com',
        phoneNumber: '(131) 331-431-7882',
        password: 'password',
        role: 'user',
        addressLine1: "151 Austyn Cape",
        addressLine2: "9531 Kautzer Lakes"
    },
    {
        id: 'USR-20124f26-068b-4419-a871-7154b64bf5fc',
        firstName: 'Jane',
        lastName: 'Doe',
        gender: 'female',
        dob: new Date("1993-10-31T16:58:33.094Z"),
        phoneNumber: '(660) 230-8989 x427',
        email: 'janedoe@gmail.com',
        password: 'password',
        addressLine1: "22924 Mills Corners",
        addressLine2: "385 Smith Flat",
        role: 'admin'
    },
    {
        id: 'USR-2a1fb798-79ab-4bb8-95e2-70de2c013886',
        firstName: 'Bob',
        lastName: 'Johnson',
        gender: 'male',
        dob: new Date("1998-04-06T17:21:45.684Z"),
        phoneNumber: '(576) 998-3205 x95797',
        email: 'bobjohnson@gmail.com',
        password: 'password',
        addressLine1: "8614 Cremin Heights",
        addressLine2: "7505 Oral Road",
        role: 'admin'
    },
];

export const users = usersDetails
    .map(({ id, firstName, lastName, gender, dob, phoneNumber, email, password, addressLine1, addressLine2, role }) =>
        new User(id, firstName, lastName, gender, dob, phoneNumber, email, password, addressLine1, addressLine2, role));
