const users = require("../../dumbData.json");

export class UserService {
  static getUserById: Function;
  static retrieveUsers: Function;
  static updateUser: Function;

  getUserById(args) {
    const userID = args.id;
    return users.filter((user) => user.id == userID)[0];
  }

  retrieveUsers(args) {
    if (args.shark) {
      const shark = args.shark;
      return users.filter((user) => user.shark === shark);
    } else {
      return users;
    }
  }

  updateUser(id, name, age) {
    users.map((user) => {
      if (user.id === id) {
        user.name = name;
        user.age = age;
        return user;
      }
    });
    return users.filter((user) => user.id === id)[0];
  }
}
