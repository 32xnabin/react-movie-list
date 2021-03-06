import React from 'react'
import { getMoviesList } from './services/index'
import ListItem from './components/ListItem'
import movie from './services/api.types'
export const App = () => {
  const [movies, setMovies] = React.useState<movie[]>()
  React.useEffect(() => {
    getMoviesList().then((res) => {
      console.log(res)
      setMovies(res)
    })
  }, [])

  return (
    <div className="w-2/3 lg:w-1/4 md:w-1/4  mx-auto">
      {movies?.map((movie, index) => (
        <>
          <div key={index} className="relative">
            <ListItem
              title={movie.title}
              tagline={movie.tagline}
              year={movie.year}
              image={movie.image}
              description={movie.description}
            />
          </div>
        </>
      ))}
    </div>
  )
}
