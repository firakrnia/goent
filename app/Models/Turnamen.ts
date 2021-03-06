import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Eliminasi from './Eliminasi'

export default class Turnamen extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public namaPertandingan: string

  @column()
  public cabangOlahraga: string

  @column()
  public tipePemain: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Eliminasi, {
    localKey: 'id',
    pivotForeignKey: 'turnamen_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'eliminasi_id',
    pivotColumns: ['urutan'],
    pivotTimestamps: false
  })
  public eliminasi: ManyToMany<typeof Eliminasi>
}
