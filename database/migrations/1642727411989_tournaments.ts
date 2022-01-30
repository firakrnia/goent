import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tournaments extends BaseSchema {
  protected tableName = 'turnamen'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nama_pertandingan').notNullable()
      table.string('cabang_olahraga').notNullable()
      table.enum('tipe_pemain',['individu', 'team'])
      table.timestamps(true,true)

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
