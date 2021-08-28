import React from 'react'
import { movie } from '../services/api.types'
const ListItem: React.FC<movie> = ({ title, tagline, year, image }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 gap-1  my-4 hover:shadow-md py-2 px-4">
      <div className="col-span-1">
        <img src={image} alt="movie banner" />
      </div>
      <div className="xs:col-span-2 sm:col-span-1 lg:col-span-2 lg:text-left md:text-left sm:text-center mx-4">
        <p className="text-black font-bold text-xl mb-1">{title}</p>
        <p className="text-gray-500 text-base  mb-2">{tagline}</p>
        <p className="text-black font-base text-vase mb-4">
          {year.substring(0, 4)}
        </p>
      </div>
    </div>
  )
}

export default ListItem
