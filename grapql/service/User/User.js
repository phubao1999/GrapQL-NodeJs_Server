const users = require('../../dumbData.json');

const getUserById = function (args) {
    const userID = args.id;
    return users.filter(user => user.id == userID)[0];
}

const retrieveUsers = function (args) {
    if (args.shark) {
        const shark = args.shark;
        return users.filter(user => user.shark === shark);
    } else {
        return users;
    }
}

const updateUser = function ({ id, name, age }) {
    users.map(user => {
        if (user.id === id) {
            user.name = name;
            user.age = age;
            return user;
        }
    });
    return users.filter(user => user.id === id)[0];
}

module.exports = {
    getUserById,
    retrieveUsers,
    updateUser
};
