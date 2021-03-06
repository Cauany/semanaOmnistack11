
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        //CRIANDO COLUNAS PARA A TABELA
        table.increments()

        table.string('title').notNullable()
        table.string('description').notNullable()
        table.decimal('value').notNullable()
        //RELACIONAMENTO ENTRE TABELAS
        table.string('ong_id').notNullable()
        //CRIAÇÃO DA CHAVE ESTRANGEIRA
        table.foreign('ong_id').references('id').inTable('ongs')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents')
};
