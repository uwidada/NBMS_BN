/**
 * Environment variables
 *
 * @module utils/envs
 * @version 1.0.0
 * @author Darisa Uwimana
 * @created 2025-03-03
 */

import dotenv from "dotenv";

dotenv.config({ path: `.env` });

const getEnv = (key:string):string =>{
    if (!key){
        throw new Error("key must be provide");
    }

    const value = process.env[key];
    if(!value){
        throw new Error(`environment valuable of ${value} i not defined`);
    }

    return value;
}

export default getEnv;
