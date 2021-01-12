import { UserService } from "src/service/User/User";

export class BuildRoot {
  static buildRoot = {
    user: UserService.getUserById,
    users: UserService.retrieveUsers,
    updateUser: UserService.updateUser,
  };
}
