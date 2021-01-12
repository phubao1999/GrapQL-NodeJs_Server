import { PersonType } from "./Type/Person";
import { MutationBuild } from "./Mutation/index";
import { QueryBuild } from "./Query/index";

export class BuildSchemaStringGrapql {
  static buildSchemaString: string = QueryBuild.query
    .concat(",")
    .concat(MutationBuild.mutationString)
    .concat(",")
    .concat(PersonType.person);
}
