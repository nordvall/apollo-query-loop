import React from "react";
import { gql, useQuery } from "@apollo/client";

const ALL_CITIES = gql`
  query AllCities {
    cities {
      id
      name
    }
    permissions {
      cities
    }
  }
`;


export default function Cities() {
  const allCities = useQuery(ALL_CITIES);

  return (
    <div>
      <h2>Cities</h2>
      {allCities.loading ? (
        <p>Loading…</p>
      ) : (
        <ul>
          {allCities.data.cities.map(city => (
            <li key={city.id}>{city.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
