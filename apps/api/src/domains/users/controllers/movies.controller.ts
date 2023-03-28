import { inject } from '@loopback/core'
import {
  api,
  Request,
  response,
  RestBindings,
  getJsonSchemaRef,
  get,
} from '@loopback/rest'
import { MoviesService } from '../services/movies.service'
import { Movies } from '../models'
import { MOVIES_SERVICE } from '../keys'

@api({ basePath: '/movies' })
export class MoviesController {
  constructor(
    @inject(RestBindings.Http.REQUEST) private req: Request,
    @inject(MOVIES_SERVICE)
    public moviesService: MoviesService,
  ) {}
  @get('/movies')
  @response(200, {
    responses: {
      '200': {
        description: 'Movies',
        content: {
          type: 'array',
          schema: getJsonSchemaRef(Movies),
        },
      },
    },
  })
  getMovies(): Promise<Movies[]> {
    return this.moviesService.getMovies()
  }
}
