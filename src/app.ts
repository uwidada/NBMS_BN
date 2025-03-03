/**
 * Environment variables
 *
 * @module app
 * @version 1.0.0
 * @author Darisa Uwimana
 * @created 2025-03-03
 */

import express ,{ NextFunction, Request,Response } from "express";
import {configureApp} from "./appConfigure";


const app = configureApp(express());


