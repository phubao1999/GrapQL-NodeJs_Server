import { Component, OnInit } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import GET_DETAILS_USER from "../GraphQL/query/GET_DETAILS_USER";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .query<any>({
        query: GET_DETAILS_USER,
        variables: {
          id: 1,
        },
      })
      .subscribe((res) => {
        console.log(res);
      }, err => {
        console.log(err);
      });
  }
}
