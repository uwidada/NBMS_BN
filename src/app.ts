/**
 * app
 *
 * @module app
 * @version 1.0.0
 * @author Darisa Uwimana
 * @created 2025-03-03
 */



import express, { NextFunction, Request, Response } from 'express';
import { configApp } from './appConfigure';
// import { configureQueues } from './queue';
// import { scheduleJobs } from './cron';
// import { v2 as cloudinary } from "cloudinary";

// import logger from './config/logger';

// Import Routes
// import routes from './route';

// Middleware
// import { handleError } from './middleware';

// Utils
// import { NotFoundError } from './utils';
import path from 'path';

const app = configApp(express());

// // Log messages example at different levels
// logger.info('This is an info message');
// logger.warn('This is a warning message');
// logger.error('This is an error message');



// Example of a route

app.get('/', (req, res) => {
  res.send("WELCOME TO NBMS'S API.");
});

// app.use('/api/v1', routes);

// Catch all 404 errors
app.all('*', (req, res, next) => {
//   const err = new NotFoundError('Page Requested not found');
console.log("page requested notFound");
//   next(err);
});

// Error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   handleError(err, req, res, next);
});



// Configure queues
// configureQueues();

// Configure cron jobs
// scheduleJobs();

export default app;



