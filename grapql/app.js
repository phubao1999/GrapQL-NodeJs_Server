const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const { buildSchema } = require("graphql");
const cors = require('cors');
const port = process.env.PORT || 3000;
const corsConfig = require('./config/cors');
const buildSchemaQL = require('./graphql/BuildSchema');
const rootGraphQL = require('./graphql/BuildRoot');
require('dotenv/config');

const app = express();

// Build GraphQL
const schema = buildSchema(buildSchemaQL.buildSchema);
const root = rootGraphQL.buildRoot;

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
