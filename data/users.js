import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: true,
  },
  {
    name: "Asif",
    email: "asif@example.com",
    password: bcrypt.hashSync("12345678", 10),
  },
  {
    name: "Godhuli",
    email: "godhuli@example.com",
    password: bcrypt.hashSync("12345678", 10),
  },
];

export default users;
