import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Turnamen from './Turnamen'

export default class Eliminasi extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public modeEliminasi: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Turnamen, {
    localKey: 'id',
    pivotForeignKey: 'eliminasi_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'turnamen_id',
    pivotColumns: ['urutan'],
    pivotTimestamps: false
  })
  public eliminasi: ManyToMany<typeof Turnamen>
}
