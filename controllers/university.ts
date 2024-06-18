import { pool } from "../shared/database";
import { Request, Response, Router } from "express";

export async function listuniversity(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  //realiza consulta sql
  const courses = await client.query(`select * from courses`)
  //retorna consulta em formato json
  return res.status(200).json(courses.rows);
}
export async function saveuniversity(req: Request, res: Response) {
  const course = req.body;
  const client = await pool.connect();
  const response = await client.query(`insert into courses (name) values ('${course.name}')`)
  res.status(201).json(response);
}



