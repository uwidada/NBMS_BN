/**
 * Configuration for the socket
 *
 * @module bicycle controller 
 * @version 1.0.0
 * @author Darisa Uwimana
 * @created 2024-21-03
 */



import {biclcyeCrudService} from "../services/bicycle";
import { Request,Response,NextFunction } from 'express';


// a controller to add a bicycle

export const addBicycleController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ):Promise<any> => {
    try {
      const { name, Model, Brand } = req.body;
      const newBicycle = await biclcyeCrudService.createBicycle(name, Model, Brand);
  
      if (!newBicycle) {
        return res.status(400).json({
          status: "fail",
          message: "No bicycle found",
        });
      }
  
      return res.status(200).json({
        status: "success",
        message: "A new bicycle was created successfully",
        data: newBicycle,
      });
    } catch (error) {
      console.error("Error creating a new bicycle:", error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }
  };

// a controller to getll a bicycles

export const getAllBicycles = async(
    req:Request,
    res:Response,
  
)=>{
    try {
        const allBicycle = await biclcyeCrudService.getAllBicycle();

        if(!allBicycle){
            return null;
        }

        return res.status(200).json({
            status:"success",
            message:"all bicycles",
            data:allBicycle
        });
    } catch (error) {
        console.log("error to get new bicycles:",error);
    }
}

// controller to get one bicycle 

export const getOneBicycle = async(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    try {
         const bicycleId = req.params;
        const getOneBicycleById = await biclcyeCrudService.getOneBiclcye(String(bicycleId));

        if(!getOneBicycleById){
            return null;
        }

        return res.status(200).json({
            status:"success",
            message:"the details of one bicycle got well",
            data:getOneBicycleById
        });
    } catch (error) {
        console.log("error to get the details of one bicycle:",error);
    }
}

// a controlle r to the details of one bicycle by name

export const getOneBicycleByname = async(
    req:Request,
    res:Response,
    next:NextFunction
) =>{
    try {
        const bicycleNme = req.body;
        const oneBicycleByName = await biclcyeCrudService.getBiclceByName(bicycleNme);

        if(!oneBicycleByName){
            return null;
        }

        return res.status(200).json({
            status:"success",
            message:"the details retrived successfully",
            data:oneBicycleByName
        });
    } catch (error) {
        console.log("error to get bicyle by name:",error);
    }
}

