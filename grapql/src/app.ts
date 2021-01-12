import { BuildRoot } from "./graphql/BuildRoot";
import { CorsConfig } from "./config/cors";
import { BuildSchemaStringGrapql } from "./graphql/BuildSchema";

const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const buildSchema = require("graphql");
const cors = require("cors");
const port = process.env.PORT || 3000;

require("dotenv/config");

const app = express();

// Build GraphQL
const schema = buildSchema(BuildSchemaStringGrapql.buildSchemaString);
const root = BuildRoot.buildRoot;

app.use(cors(CorsConfig.corsConfig));
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(port, () => console.log(`Now browse to localhost:${port}/graphql`));
