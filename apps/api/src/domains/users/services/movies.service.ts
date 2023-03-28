import { repository } from '@loopback/repository'
import { MoviesRepository } from '../repositories/movies.repository'

export class MoviesService {
  constructor(
    @repository(MoviesRepository)
    private moviesRepository: MoviesRepository,
  ) {}
  async getMovies() {
    return this.moviesRepository.find()
  }
}
// export interface MoviesService {
//   getCharacter(moviesId: number): Promise<object>
// }

// fetches = {
//   name: 'restds',
//   connector: 'rest',
//   baseURL: 'https://swapi.dev/api/films',
//   crud: false,
//   options: {
//     headers: {
//       accept: 'application/json',
//       'content-type': 'application/json',
//     },
//   },
//   operations: [
//     {
//       template: {
//         method: 'GET',
//         url: 'https://swapi.dev/api/films/{moviesId}',
//       },
//       functions: {
//         getCharacter: ['moviesId'],
//       },
//     },
//   ],
// }
// async getMoviesById(id: integer) {
//   return this.moviesRepository.findById(id)
// }
