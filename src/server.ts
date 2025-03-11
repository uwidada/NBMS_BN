/**
 * server configuration
 *
 * @module appConfigure
 * @version 1.0.0
 * @author Darisa Uwimana
 * @created 2025-03-03
 */

import { configApp } from "./appConfigure";
import { PORT } from "./contants";
import {Server} from "socket.io";
import { configureSocket } from './socket';
import app from "./app";

const server = app.listen(PORT,() =>{
    console.log(`app is listening to port number of ${PORT}`);
});

const io = new Server(server);

configureSocket(io);











// /**
//  * entry point for the server
//  *
//  * @module server/index
//  * @description This is the entry point for the server
//  * @version 1.0.0
//  * @author Bryan Murasira
//  * @created 2024-10-31
//  */

// import { Server } from 'socket.io';

// import app from './app';
// import { configureSocket } from './socket';
// import { PORT } from './constants';

// import logger from './config/logger';

// const server = app.listen(PORT, () => {
//   logger.info(`Server is running on port ${PORT}`);
// });

// const io = new Server(server);




// // Configure sockets
// configureSocket(io);

