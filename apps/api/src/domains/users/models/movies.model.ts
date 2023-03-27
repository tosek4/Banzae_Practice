import { Entity, model, property } from '@loopback/repository'

@model()
export class Movies extends Entity {
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
  title?: string

  @property({
    type: 'string',
    required: true,
  })
  opening_text?: string

  @property({
    type: 'string',
    required: true,
  })
  date?: string

  constructor(date?: Partial<Movies>) {
    super(date)
  }
}
