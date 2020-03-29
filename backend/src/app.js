const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('../routes')

const app = express()

app.use(cors({
    //origin:'http: (o indereço)
}))
app.use(express.json( ))
app.use(routes)
app.use(errors())

module.exports = app
/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP
 * 
 * GET: Buscar/listar uma Informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/** 
 * Tipos de parâmetros
 * 
 * Query: Parâmetros nomeados enviados na rota após "?"
 * (Filtros,paginação)
 * 
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users).select(*).where()
   */