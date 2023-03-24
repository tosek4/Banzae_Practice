import { BindingKey } from '@loopback/core'
import { UserService } from './services/user.service'
import { FootballPlayerService } from './services/footballPlayer.service'

export const USERS_SERVICE = BindingKey.create<UserService>('service.user')
export const FOOTBALLPLAYER_SERVICE = BindingKey.create<FootballPlayerService>(
  'service.footballPlayer',
)
