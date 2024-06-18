import { pool } from "../shared/database";
import { Request, Response, Router } from "express";

export async function listuniversity(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  //realiza consulta sql
  const universitys = await client.query(`select * from university`)
  //retorna consulta em formato json
  return res.status(200).json(universitys.rows);
}
export async function saveuniversity(req: Request, res: Response) {
  const university = req.body;
  const client = await pool.connect();
  const response = await client.query(`insert into university (nome, endereco) values ('${university.name}', '${university.endereco}')`)
  res.status(201).json(response);
}



