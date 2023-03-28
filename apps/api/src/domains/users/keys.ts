import { BindingKey } from '@loopback/core'
import { UserService } from './services/user.service'
import { MoviesService } from './services/movies.service'

export const USERS_SERVICE = BindingKey.create<UserService>('service.user')
export const MOVIES_SERVICE = BindingKey.create<MoviesService>('service.movies')
