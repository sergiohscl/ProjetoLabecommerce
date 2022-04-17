import { Request, Response } from "express";
import { connection } from "../data/connection";


export default async function createUsers(req: Request, res: Response): Promise<void> {
   try {

      const { name, email, password } = req.body      
      
      if (!name || !email || !password) {
         res.statusCode = 422
         throw "'name', 'email' e 'password' são obrigatórios"
      }
      await connection("labecommerce_users")
         .insert({name, email, password})
         
      res.status(201).end()

   } catch (error) {
      if(error instanceof Error){
          res.send({error, message:error.message})
      }else{
          res.send({message: "Unexpected error"})
      }
  }
}