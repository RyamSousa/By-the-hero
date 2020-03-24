const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após o símbolo de "?" (filtros, paginação)
  * Route Params: Parâmetros utilizafos para identificar recursos
  * Rquest Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /** 
   * SQL: MySQL, SQLLite, PostgrestSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Driver: SELECT * FROM users
    * Query Buider: table('users').select('*').where()
    */



