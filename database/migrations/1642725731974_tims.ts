import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tims extends BaseSchema {
  protected tableName = 'tim'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nama_tim').notNullable()
      table.string('logo_tim').notNullable()
      table.timestamps(true, true)

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */

    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
