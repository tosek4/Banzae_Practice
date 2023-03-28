import { inject } from '@loopback/core'
import { DefaultCrudRepository } from '@loopback/repository'
import { DbDataSource } from '../../../datasources'
import { Movies, IMoviesRelations } from '../models'

export class MoviesRepository extends DefaultCrudRepository<
  Movies,
  typeof Movies.prototype.id,
  IMoviesRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Movies, dataSource)
  }
  // public findById(Id: BigInteger) {
  //   return this.findOne({ where: { Id } })
  // }
}
