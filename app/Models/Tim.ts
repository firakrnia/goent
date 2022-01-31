import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Player from './Player'
import TurnamenEliminasi from './TurnamenEliminasi'

export default class Tim extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public namaTim: string

  @column()
  public logoTim?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Player, {
    foreignKey: 'namaTim'
  })
  public player: HasMany<typeof Player>

  @manyToMany(() => TurnamenEliminasi, {
    localKey: 'id',
    pivotForeignKey: 'tim_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'turnel_id',
    pivotColumns: ['nama', 'tanggal'],
    pivotTimestamps: false
  })
  public eliminasi: ManyToMany<typeof TurnamenEliminasi>
}
