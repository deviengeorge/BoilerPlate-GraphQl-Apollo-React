const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const PostAPI = require("./datasources/post");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    // commentAPI: new CommentAPI(),
    postAPI: new PostAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
