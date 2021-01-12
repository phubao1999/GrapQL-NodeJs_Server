export class QueryBuild {
  static query: string = `
    type Query {
        user(id: Int!): Person
        users(shark: String): [Person]
    } 
`;
}
