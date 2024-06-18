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
  const { nome, endereco } = req.body;
  const client = await pool.connect();
  const queryText = 'INSERT INTO university (nome, endereco) VALUES ($1, $2) RETURNING *';
  const values = [nome, endereco];
  const response = await client.query(queryText, values);
  res.status(201).json(response);
}



