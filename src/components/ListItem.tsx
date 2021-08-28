import React from 'react'
import { movie } from '../services/api.types'
const ListItem: React.FC<movie> = ({
  title,
  tagline,
  year,
  image,
  description,
}) => {
  const [showDetails, setShowDetails] = React.useState<boolean>(false)

  return (
    <>
      <div className="relative hover:shadow-lg px-1 ">
        {showDetails && (
          <div className="col-span-4 h-full text-right px-2">
            <button onClick={() => setShowDetails(false)}>X</button>
          </div>
        )}
        <button onClick={() => setShowDetails(true)}>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-1 gap-1  my-4 ">
              <div className="col-span-1">
                <img src={image} alt="movie banner" />
              </div>
              <div className="xs:col-span-2 sm:col-span-1 lg:col-span-3 lg:text-left md:text-left sm:text-center mx-4">
                <p className="text-black font-bold text-xl mb-1">{title}</p>
                <p className="text-gray-500 text-base  mb-2">{tagline}</p>
                <p className="text-black font-base text-vase mb-4">
                  {year.substring(0, 4)}
                </p>
              </div>
            </div>
            {showDetails && (
              <div className="text-left">
                <p className="text-black text-base mb-4 text-left">
                  {description}
                </p>
                <button className="my-4 bg-green-600 px-2 py-1 text-white rounded-md">
                  ADD TO FAVORITE
                </button>
              </div>
            )}
          </div>
        </button>
      </div>
    </>
  )
}

export default ListItem
