const query = `
    type Query {
        user(id: Int!): Person
        users(shark: String): [Person]
    } 
`;

module.exports = {
    query
};
