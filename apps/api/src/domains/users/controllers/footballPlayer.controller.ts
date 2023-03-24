import { inject } from '@loopback/core'
import {
  post,
  api,
  Request,
  response,
  RestBindings,
  getJsonSchemaRef,
  requestBody,
  get,
} from '@loopback/rest'
import { FootballPlayerService } from '../services/footballPlayer.service'
import { FootballPlayer } from '../models/footballPlayer.model'
import { FOOTBALLPLAYER_SERVICE } from '../keys'

@api({ basePath: '/footballPlayer' })
export class FootballPlayerController {
  constructor(
    @inject(RestBindings.Http.REQUEST) private req: Request,
    @inject(FOOTBALLPLAYER_SERVICE)
    public footballPlayerService: FootballPlayerService,
  ) {}

  @post('/')
  @response(200, {
    responses: {
      '200': {
        description: 'FootballPlayer',
        content: {
          schema: getJsonSchemaRef(FootballPlayer),
        },
      },
    },
  })
  createFootballPlayer(
    @requestBody() footballPlayer: FootballPlayer,
  ): Promise<FootballPlayer> {
    return this.footballPlayerService.createFootballPlayer(footballPlayer)
  }

  @get('/')
  @response(200, {
    responses: {
      '200': {
        description: 'FootballPlayer',
        content: {
          type: 'array',
          schema: getJsonSchemaRef(FootballPlayer),
        },
      },
    },
  })
  getFootballPlayer(): Promise<FootballPlayer[]> {
    return this.footballPlayerService.getFootballPlayer()
  }
}
