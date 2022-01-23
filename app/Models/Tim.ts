import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Player from './Player'

export default class Tim extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public namaTim: string

  @column()
  public logoTim: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Player, {
    foreignKey: 'namaTim'
  })
  public player: HasMany<typeof Player>
}
