import { inject } from '@loopback/core'
import { DefaultCrudRepository } from '@loopback/repository'
import { DbDataSource } from '../../../datasources'
import { BasketballPlayer, IBasketballPlayerRelations } from '../models'

export class BasketballPlayerRepository extends DefaultCrudRepository<
  BasketballPlayer,
  typeof BasketballPlayer.prototype.id,
  IBasketballPlayerRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(BasketballPlayer, dataSource)
  }
}
