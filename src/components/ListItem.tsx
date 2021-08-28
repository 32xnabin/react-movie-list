import React from 'react'
import { movie } from '../services/api.types'
const ListItem: React.FC<movie> = ({ title, tagline, year, image }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-1 px-20  text-center my-4 ">
      <div className="xs:col-span-2 sm:col-span-1 lg:col-span-1">
        <img src={image} alt="movie banner" />
      </div>
      <div className="xs:col-span-2 sm:col-span-1 lg:col-span-1 lg:text-left md:text-left sm:text-center">
        <p className="text-black font-bold text-xl mb-4">{title}</p>
        <p className="text-gray-500 text-xl  mb-4">{tagline}</p>
        <p className="text-black font-medium text-xl mb-4">
          {year.substring(0, 4)}
        </p>
      </div>
    </div>
  )
}

export default ListItem
