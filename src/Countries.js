import React from "react";
import { gql, useQuery } from "@apollo/client";

const ALL_COUNTRIES = gql`
  query AllCountries {
    countries {
      id
      name
    }
    permissions {
      countries
    }
  }
`;


export default function Countries() {
  const allCountries = useQuery(ALL_COUNTRIES);

  return (
    <div>
      <h2>Countries</h2>
      {allCountries.loading ? (
        <p>Loading…</p>
      ) : (
        <ul>
          {allCountries.data.countries.map(country => (
            <li key={country.id}>{country.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
