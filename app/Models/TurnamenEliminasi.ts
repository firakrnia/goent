import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Tim from './Tim'

export default class TurnamenEliminasi extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public turnamen_id: number

  @column()
  public eliminasi_id: number

  @column()
  public urutan: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Tim, {
    localKey: 'id',
    pivotForeignKey: 'turnel_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'tim_id',
    pivotColumns: ['nama', 'tanggal'],
    pivotTimestamps: false
  })
  public eliminasi: ManyToMany<typeof Tim>
}
