import { DataObject, repository } from '@loopback/repository'
import { FootballPlayerRepository } from '../repositories/FootballPlayer.repository'
import { FootballPlayer } from '../models/footballPlayer.model'

export class FootballPlayerService {
  constructor(
    @repository(FootballPlayerRepository)
    private footballPlayerRepository: FootballPlayerRepository,
  ) {}
  async createFootballPlayer(footballPlayer: DataObject<FootballPlayer>) {
    return this.footballPlayerRepository.create(footballPlayer)
  }

  async getFootballPlayer() {
    return this.footballPlayerRepository.find()
  }
}
