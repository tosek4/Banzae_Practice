import { DataObject, repository } from '@loopback/repository'
import { BasketballPlayerRepository } from '../repositories/BasketballPlayer.repository'
import { BasketballPlayer } from '../models'

export class BasketballPlayerService {
  constructor(
    @repository(BasketballPlayerRepository)
    private basketballPlayerRepository: BasketballPlayerRepository,
  ) {}
  async createBasketballPlayer(basketballPlayer: DataObject<BasketballPlayer>) {
    return this.basketballPlayerRepository.create(basketballPlayer)
  }

  async getBasketballPlayer() {
    return this.basketballPlayerRepository.find()
  }
}
