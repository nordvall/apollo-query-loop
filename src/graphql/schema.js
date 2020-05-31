import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLEnumType,
} from 'graphql';

const CountryType = new GraphQLObjectType({
  name: 'Country',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  },
});

const countryData = [
  { id: 1, name: 'Norway' },
  { id: 2, name: 'Finland' },
  { id: 3, name: 'Denmark' },
  { id: 4, name: 'Sweden' },
];

const CityType = new GraphQLObjectType({
  name: 'City',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  },
});

const cityData = [
  { id: 41, name: 'Amsterdam' },
  { id: 42, name: 'Oslo' },
  { id: 43, name: 'Copenhagen' },
];


const PermissionEnumType = new GraphQLEnumType({
  name: 'PermissionEnumType',
  values: { 
    READ: { value: 'READ' }, 
    UPDATE: { value: 'UPDATE'},
    DELETE: { value: 'DELETE'}
  }
})

const PermissionsType = new GraphQLObjectType({
  name: 'Permissions',
  fields: {
    countries: { type: GraphQLList(PermissionEnumType) },
    cities: { type: GraphQLList(PermissionEnumType) },
  },
});

const permissionData = {
  countries: [ 'READ', 'UPDATE' ],
  cities: [ 'READ', 'UPDATE', 'DELETE' ],
};


const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    countries: {
      type: new GraphQLList(CountryType),
      resolve: () => {
        console.log("Resolving countries.");
        return countryData;
      },
    },
    cities: {
      type: new GraphQLList(CityType),
      resolve: () => {
        console.log("Resolving cities.");  
        return cityData;
      },
    },
    permissions: {
      type: PermissionsType,
      resolve: () => {
        console.log("Resolving permssions");
        return permissionData;
      }
    }
  },
});

export const schema = new GraphQLSchema({ query: QueryType });
