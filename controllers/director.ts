import { pool } from "../shared/database";
import { Request, Response, Router } from "express";

export async function listDirector(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  //realiza consulta sql
  const director = await client.query(`select * from director`)
  //retorna consulta em formato json
  return res.status(200).json(director.rows);
}
export async function saveDirector(req: Request, res: Response) {
  const director = req.body;
  const client = await pool.connect();
  const response = await client.query(`insert into director (nome, email) values ('${director.nome}', '${director.email}')`)
  res.status(201).json(response);
}



