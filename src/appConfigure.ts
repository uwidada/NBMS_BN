/**
 * app configurations
 *
 * @module appConfigure
 * @version 1.0.0
 * @author Darisa Uwimana
 * @created 2025-03-03
 */



import express, { Express } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
// import session from 'express-session';
import morgan from 'morgan';
// import logger from './config/logger';

import {
  corsOptions,
} from './contants/appConstatnts/cors';

// app configurations

export const configApp = (app:Express): Express =>{


    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use(cookieParser());

    //Setup Morgan to 
  app.use(
    morgan('combined', {
      stream: {
        write: (message: string) => {
        //   logger.info(message.trim());
        },
      },
    })
  );

  return app;
};