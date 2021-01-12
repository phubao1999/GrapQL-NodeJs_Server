export class MutationBuild {
  static mutationString: string = `
    type Mutation {
        updateUser(id: Int!, name: String!, age: String): Person
    }
`;
}
