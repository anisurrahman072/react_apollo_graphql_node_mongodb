import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    welcomeType: String
  }
`;

const resolvers = {
  Query: {
    welcomeType: () => {
      return "Hey welcome to Apollo Graqphql server";
    },
  },
};

async function initApolloServer() {
  let app = express();
  let apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.use((req, res) => {
    res.send("Express server started successfully");
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () =>
    console.log(`Express server is running on port ${PORT}`)
  );
}

initApolloServer();
