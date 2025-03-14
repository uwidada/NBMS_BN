/**
 * Application constants
 *
 * @module appConstants/cors
 * @version 1.0.0
 * @author Darisa Uwimana
 * @created 2025-03-3
 */


import { CorsOptions } from 'cors';
import getEnv from '../../utils/envs';

const allowedOriginsEnv = getEnv('ALLOWED_ORIGINS')
const allowedOrigins = allowedOriginsEnv
  ? allowedOriginsEnv.split(',')
  : [];
console.log(allowedOrigins);

export const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};
console.log(corsOptions);
