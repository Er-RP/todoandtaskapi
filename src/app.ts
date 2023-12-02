import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import {connectDB} from "./db/connect"
import { schemas } from "./schema";
import { resolvers } from "./resolver";
import {config} from "./config"


const server = new ApolloServer({
    typeDefs : schemas,
    resolvers : resolvers,
    introspection : true
  });

const start = async () => {
    try {
        connectDB(config.MONGO_URI)
        startStandaloneServer(server, { listen: { port: config.PORT } });
        console.log(`Server is listening on port ${config.PORT}`)
    } catch (error) {
        console.log(error)
    }
}

start()