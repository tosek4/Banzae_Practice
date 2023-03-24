import { Entity, model, property } from '@loopback/repository'

@model()
export class FootballPlayer extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number

  @property({
    type: 'string',
    required: true,
  })
  name: string

  @property({
    type: 'string',
  })
  lastname: string

  constructor(data?: Partial<FootballPlayer>) {
    super(data)
  }
}
