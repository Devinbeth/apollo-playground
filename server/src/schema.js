const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid."
    tracksForHome: [Track!]!
  }

  "A Track is a group of modules that teaches about a certain subject."
  type Track {
    id: ID!
    "the track's title"
    title: String!
    "the track's main author"
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
