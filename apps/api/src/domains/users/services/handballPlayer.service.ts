import { DataObject, repository } from '@loopback/repository'
import { HandballPlayerRepository } from '../repositories/HandballPlayer.repository'
import { HandballPlayer } from '../models'

export class HandballPlayerService {
  constructor(
    @repository(HandballPlayerRepository)
    private handballPlayerRepository: HandballPlayerRepository,
  ) {}
  async createHandballPlayer(handballPlayer: DataObject<HandballPlayer>) {
    return this.handballPlayerRepository.create(handballPlayer)
  }

  async getHandballPlayer() {
    return this.handballPlayerRepository.find()
  }
}
