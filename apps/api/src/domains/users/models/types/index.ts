import { User } from '../user.model'
import { Movies } from '../movies.model'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IUserRelations {
  // describe navigational properties here
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IMoviesRelations {
  // describe navigational properties here
}

export type TUserWithRelations = User & IUserRelations
export type TMoviesWithRelations = Movies & IMoviesRelations
