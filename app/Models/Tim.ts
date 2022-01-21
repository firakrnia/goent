import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Player from './Player'

export default class Tim extends BaseModel {
  @hasMany(() => Player, {
    foreignKey: 'id'
  })
  public player: HasMany<typeof Player>
  
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @hasMany(() => Player, {
    foreignKey: 'tim'
  })
  public players: HasMany<typeof Player>
}
