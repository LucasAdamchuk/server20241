"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveuniversity = exports.listuniversity = void 0;
const database_1 = require("../shared/database");
function listuniversity(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //conecta com o banco
        const client = yield database_1.pool.connect();
        //realiza consulta sql
        const courses = yield client.query(`select * from courses`);
        //retorna consulta em formato json
        return res.status(200).json(courses.rows);
    });
}
exports.listuniversity = listuniversity;
function saveuniversity(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const course = req.body;
        const client = yield database_1.pool.connect();
        const response = yield client.query(`insert into courses (name) values ('${course.name}')`);
        res.status(201).json(response);
    });
}
exports.saveuniversity = saveuniversity;
//teste
