const { gql } = require("apollo-server");

const typeDefs = gql`
  type post {
    id: ID!
    title: String
    body: String
  }

  type todo {
    id: ID!
    title: String
    completed: Boolean
  }

  type Query {
    posts: [post]!
    post(id: ID!): post
  }
`;

module.exports = typeDefs;
