import { inject } from '@loopback/core'
import { DefaultCrudRepository } from '@loopback/repository'
import { DbDataSource } from '../../../datasources'
import { FootballPlayer, IFootballPlayerRelations } from '../models'

export class FootballPlayerRepository extends DefaultCrudRepository<
  FootballPlayer,
  typeof FootballPlayer.prototype.id,
  IFootballPlayerRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(FootballPlayer, dataSource)
  }
}
