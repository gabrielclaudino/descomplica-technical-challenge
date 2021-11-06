import http from 'http';
import { ApolloServer } from 'apollo-server-koa';
import {
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginDrainHttpServer,
} from 'apollo-server-core';
import logger from '../lib/logger';
import '../lib/mongo';
import app from './index';

import { typeDefs } from '../lib/temp/schema';
import { resolvers } from '../lib/temp/resolver';

async function startServer() {
  const httpServer = http.createServer();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageDisabled(),
    ],
  });

  await server.start();
  server.applyMiddleware({ app });

  const httpPort = process.env.PORT || 80;
  httpServer.on('request', app.callback());
  await new Promise((resolve) =>
    httpServer.listen({ port: httpPort }, resolve)
  );
  logger.info(`API -> http://localhost:${httpPort}`);
}

startServer();
