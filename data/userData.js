import bcrypt from 'bcryptjs';

const userData = [
  {
    name: 'Laurie Admin',
    email: 'laurie@admin.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Eric Admin',
    email: 'eric@admin.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Stephen Dev',
    email: 'stephen@dev.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Alan Dev',
    email: 'alan@dev.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'James Dev',
    email: 'james@dev.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default userData;
