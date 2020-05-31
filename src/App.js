import React from "react";
import { gql, useQuery } from "@apollo/client";
import Countries from "./Countries"
import Cities from "./Cities";


export default function App() {

  return (
    <main>
      <h1>Apollo Client Issue Reproduction</h1>
      <p>
        This application can be used to demonstrate an error in Apollo Client.
      </p>
      <Countries />
      <Cities />
    </main>
  );
}
