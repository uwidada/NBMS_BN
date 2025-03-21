/**
 * Configuration for the socket
 *
 * @module bicycle service
 * @version 1.0.0
 * @author Darisa Uwimana
 * @created 2024-21-03
 */

import prisma from "../config/prismaConfig";
 import  {bicycle} from "../types/bicycle"
    

//a sevrice to add a new bicyle

export const createBicycle = async (                            
    name: string,             
    Model :string,           
    Brand :string           
) =>{
    try {
        const newBicycle = await prisma.bicycle.create({
           data:{
            name:name,
            model:Model,
            brand:Brand,
           }
        });

        if (!newBicycle){
            return null;
        }

        return newBicycle;
        
    } catch (error) {
        console.log("error occured while creating a new bicyle:",error);
    }
     
}

// service to get all bicycle created

export const getAllBicycle = async()=>{
    try {
        const allBicycle = await prisma.bicycle.findMany({});

        if(!allBicycle){
            return null;
        }
        return allBicycle;
    } catch (error) {
      console.log("error to get all biclce :",error);
        
    }

}

// service to get one biclce by id 

export const getOneBiclcye = async(
    bicycleId:string,
):Promise<any> =>{
    try {
        const detailOfOneBiclcye = await prisma.bicycle.findUnique({
            where:{id:bicycleId}
        });

        if(!detailOfOneBiclcye){
            return null;
        }

        return detailOfOneBiclcye;
    } catch (error) {
        console.log("error to get one biclcye detail:",error);
    }
}

// a service to get a bicycle by name 

export const getBiclceByName = async(
    biclcyeName:string,
):Promise<any> =>{
    try {
        const getbiclcyeByName = await prisma.bicycle.findUnique({
             where:{name:biclcyeName}
        });

        if(!getbiclcyeByName){
            return null;
        }

        return getbiclcyeByName
    } catch (error) {
        console.log("error to get biclcle name:",error);
    }
}

// a service to update a biclye

export const updateBicycle = async (
    bicycleId: string,
    name: string,             
    model: string,           
    brand: string 
): Promise<bicycle | null> => {  // Add null for proper handling
    try {
        const bicycleUpdate = await prisma.bicycle.update({
            where: { id: bicycleId },
            data: {
                name: name,
                model: model,  // Use lowercase if Prisma expects it
                brand: brand,  // Use lowercase if Prisma expects it
            }
        });

        if(!bicycleUpdate)
            return null;

        return bicycleUpdate;
    } catch (error) {
        console.error("Error updating bicycle:", error);
        return null;
    }
};
