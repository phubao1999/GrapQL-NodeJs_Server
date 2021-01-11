const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
require('dotenv/config');
const { buildSchema } = require("graphql");
const cors = require('cors');
const port = process.env.PORT || 3000;
const corsConfig = require('./config/cors');
let users = require('./dumbData.json');

// Initialize a GraphQL schema
const schema = buildSchema(`
  type Query {
    user(id: Int!): Person
    users(shark: String): [Person]
  },
  type Person {
    id: Int
    name: String
    age: Int
    shark: String
  }
  type Mutation {
    updateUser(id: Int!, name: String!, age: String): Person
  }
`);

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

const root = {
    user: getUserById,
    users: retrieveUsers,
    updateUser: updateUser
};

const app = express();
app.use(cors(corsConfig));
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);
app.listen(port, () => console.log(`Now browse to localhost:${port}/graphql`));

