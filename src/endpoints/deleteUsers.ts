import { Request, Response } from "express";
import { connection } from "../data/connection";


export default async function deleteUsers(req:Request, res:Response):Promise<void> {
    try {
        const { id } = req.params

        await connection('labecommerce_users')
            .delete()
            .where({ id })

        res.status(200).end('Usuário deletado com sucesso!')

    } catch (error) {
        res.status(500).end()
    }
}