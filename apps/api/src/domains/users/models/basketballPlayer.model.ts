import { Entity, model, property } from '@loopback/repository'

@model()
export class BasketballPlayer extends Entity {
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

  constructor(data?: Partial<BasketballPlayer>) {
    super(data)
  }
}
