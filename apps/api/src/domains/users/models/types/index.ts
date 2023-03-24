import { User } from '../user.model'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IUserRelations {
  // describe navigational properties here
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IBasketballPlayerRelations {
  // describe navigational properties here
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IFootballPlayerRelations {
  // describe navigational properties here
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IHandballPlayerRelations {
  // describe navigational properties here
}

export type TUserWithRelations = User & IUserRelations
