const mutation = `
    type Mutation {
        updateUser(id: Int!, name: String!, age: String): Person
    }
`;

module.exports = {
    mutation
};
