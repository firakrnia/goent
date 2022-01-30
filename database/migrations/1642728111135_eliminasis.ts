import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Eliminasis extends BaseSchema {
  protected tableName = 'eliminasi'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.enum('mode_eliminasi', ['grup', 'penyisihan', 'gugur_tunggal'])
      table.timestamps(true, true)

    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
