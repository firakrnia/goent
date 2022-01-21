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

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      // table.timestamp('created_at', { useTz: true })
      // table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
