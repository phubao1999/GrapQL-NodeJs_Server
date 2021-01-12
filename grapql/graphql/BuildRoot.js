const userService = require('../service/User/User');

const buildRoot = {
    user: userService.getUserById,
    users: userService.retrieveUsers,
    updateUser: userService.updateUser
}

module.exports = {
    buildRoot
};
