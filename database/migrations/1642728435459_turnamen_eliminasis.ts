import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TurnamenEliminasis extends BaseSchema {
  protected tableName = 'turnamen_eliminasi'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('turnamen_id').unsigned().notNullable().references('turnamen.id')
      table.integer('eliminasi_id').unsigned().notNullable().references('eliminasi.id')
      table.integer('urutan').notNullable()
      table.timestamps(true, true)

    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
