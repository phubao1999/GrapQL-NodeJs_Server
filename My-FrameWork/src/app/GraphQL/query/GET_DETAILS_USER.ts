import { gql } from "apollo-angular";

const GET_DETAILS_USER = gql`
  query getDetailsUser($id: Int!) {
    user(id: $id) {
      name
      age
      shark
    }
  }
`;

export default GET_DETAILS_USER;