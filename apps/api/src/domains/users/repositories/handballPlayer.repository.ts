import { inject } from '@loopback/core'
import { DefaultCrudRepository } from '@loopback/repository'
import { DbDataSource } from '../../../datasources'
import { HandballPlayer, IHandballPlayerRelations } from '../models'

export class HandballPlayerRepository extends DefaultCrudRepository<
  HandballPlayer,
  typeof HandballPlayer.prototype.id,
  IHandballPlayerRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(HandballPlayer, dataSource)
  }
}
