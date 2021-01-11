import { NgModule } from "@angular/core";
import { APOLLO_OPTIONS } from "apollo-angular";
import { ApolloClientOptions, InMemoryCache } from "@apollo/client/core";
import { HttpLink } from "apollo-angular/http";
import * as env from "src/environments/environment";

const uri = env.environment.graphQLServer;
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
