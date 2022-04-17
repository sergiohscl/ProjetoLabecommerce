import { Request, Response } from "express";
import { connection } from "../data/connection";
import { products } from "../types";


export default async function getAllProducts(req: Request, res: Response): Promise<void> {

    try {
        const { name, order } = req.query
        if(!name){
         res.statusCode = 404
         throw "Lista de produtos não encontrada!"             
        }
        //const result: products[] = await connection.raw(`
         //   SELECT * FROM labecommerce_products           
         //   `)
      //  res.send(result[0])
        const users: products[] = await connection('labecommerce_products')
            .where("name", "LIKE", `%${name}%`)
            .orderBy("name", order as string)

        res.send(users)

    } catch (error) {
        res.status(500).send("Unexpected server error")
    } 
}