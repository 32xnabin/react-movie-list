import React from 'react'
import movie from '../services/api.types'
import { animated, useTransition } from 'react-spring'
const ListDetail: React.FC<movie> = ({
  title,
  tagline,
  year,
  image,
  description,
}) => {
  const [showMessage, setShowMessage] = React.useState<boolean>(false)
  const addToFavorites = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation()
    setShowMessage(true)
  }
  const transition = useTransition(showMessage === true, null, {
    from: {
      opacity: 0,
      transform: 'translateY(100%)',
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0%)',
    },
    leave: {
      opacity: 0,
      transform: 'translateY(100%)',
    },
  })

  return (
    <>
      <div className="relative hover:shadow-lg px-1">
        <div>
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

            <div className="text-left">
              <p className="text-black text-base mb-4 text-left">
                {description}
              </p>
              <button
                data-testid="fav"
                className="my-4 bg-green-600 px-2 py-1 text-white rounded-md"
                onClick={addToFavorites}
              >
                ADD TO FAVORITE
              </button>
              {transition.map(
                ({ item, key, props }) =>
                  item && (
                    <animated.div
                      className="Settings__overlay"
                      key={key}
                      style={{ opacity: props.opacity }}
                    >
                      <animated.div
                        className="Settings"
                        style={{ transform: props.transform }}
                        aria-modal="true"
                        role="dialog"
                        tabIndex={-1}
                        data-reach-dialog-content=""
                        onClick={(event) => event.stopPropagation()}
                      >
                        {' '}
                        <p className="bg-green-600 opacity-60 w-full text-white text-base mb-4 text-left py-4 px-4 transition delay-150 duration-300 ease-in-out ...">
                          <span className="text-2xl">&#10003;</span>
                          Added to Favorites
                        </p>
                      </animated.div>
                    </animated.div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListDetail
