/**
 * Configuration for the socket
 *
 * @module socket.configuration
 * @version 1.0.0
 * @author Darisa Uwimana
 * @created 2025-03-14
 */

import { Server as SocketIOServer, Socket } from 'socket.io';
// import logger from '../config/logger';
// import prisma from '../config/prismaClient'

export let io: SocketIOServer;

export const configureSocket = (server: SocketIOServer) => {
  io = server;

  io.on('connection', (socket: Socket) => {
    console.info(`A user connected: ${socket.id}`);

    socket.on('disconnect', () => {
      console.info(`A user disconnected: ${socket.id}`);
    });
  });
};

