import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Jadwals extends BaseSchema {
  protected tableName = 'jadwals'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('turnel_id').unsigned().notNullable().references('turnamen_eliminasi.id')
      table.string('nama').notNullable()
      table.dateTime('tanggal').notNullable()
      table.integer('tim_id').unsigned().notNullable().references('tims.id')
      table.timestamps(true, true)

      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
