import { Request, Response } from "express";
import { connection } from "../data/connection";
import { user } from "../types";


export default async function getAllUsers(req: Request, res: Response): Promise<void> {

    try {
        const name = req.query
        if(!name){
            res.statusCode = 404
            throw "Lista de usuários não encontrada!"             
           }
        //const result: user[] = await connection.raw("SELECT * FROM labecommerce_users")
        //res.send(result[0])
        const users: user[] = await connection('labecommerce_users')
        res.send(users)

    } catch (error) {
        res.status(500).send("Unexpected server error")
    } 
}