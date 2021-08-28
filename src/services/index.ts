import axios from 'axios'
import movie from './api.types'
const api_key = 'd20d120d9dd9db57afb22f30dc381d46'
const image_base_url = 'https://image.tmdb.org/t/p/w500/'
const search_api_url = 'https://api.themoviedb.org/3/search/person'
const queires = 'language=en-US&query=drama&page=1&include_adult=false'

export const getMoviesList = async (): Promise<movie[]> => {
  return axios
    .get(`${search_api_url}?api_key=${api_key}&${queires}`)
    .then((response) => {
      return response.data.results
        .filter(
          (obj: any) =>
            obj.known_for[0].poster_path && obj.known_for[0].original_title
        )
        .map((movie: any) => {
          return {
            title: movie.known_for[0].original_title,
            tagline: movie.name,
            year: movie.known_for[0].release_date,
            image: `${image_base_url}${movie.known_for[0].poster_path}`,
            description: movie.known_for[0].overview,
          }
        })
    })
    .catch(function (error) {
      console.log(error)
      return null
    })
}
