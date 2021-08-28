import React from 'react'
import { getMoviesList } from './services/index'
import ListItem from './components/ListItem'
import { movie } from './services/api.types'
export const App = () => {
  const [movies, setMovies] = React.useState<movie[]>()
  React.useEffect(() => {
    getMoviesList().then((res) => {
      setMovies(res)
    })
  }, [])
  return (
    <div className="lg:w-1/4 md:w-1/4 sm:w-1/2 mx-auto text-left">
      {movies?.map((movie, index) => (
        <div key={index}>
          <ListItem
            title={movie.title}
            tagline={movie.tagline}
            year={movie.year}
            image={movie.image}
            description={movie.description}
          />
        </div>
      ))}
    </div>
  )
}
