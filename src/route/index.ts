/**
 * Configuration for the socket
 *
 * @module bicycle routes 
 * @version 1.0.0
 * @author Darisa Uwimana
 * @created 2024-21-03
 */


import Router  from "express";
import {addBicycleController,getAllBicycles,getOneBicycle,getOneBicycleByname}  from '../controllers/bicycle';

const bicycleRoutes = Router();

bicycleRoutes.get("/add-bicycle",getAllBicycles as any);

export default bicycleRoutes; // Export correctly
