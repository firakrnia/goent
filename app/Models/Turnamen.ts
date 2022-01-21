import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Turnaman extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nama_pertandingan: string

  @column()
  public 

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
