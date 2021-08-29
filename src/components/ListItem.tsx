import React from 'react'
import movie from '../services/api.types'
import { animated, useTransition } from 'react-spring'
import ListDetail from './ListDetail'
const ListItem: React.FC<movie> = ({
  title,
  tagline,
  year,
  image,
  description,
}) => {
  const [showDetails, setShowDetails] = React.useState<boolean>(false)
  const showMovieDetails = () => {
    setShowDetails(true)
  }
  const handleClose = () => {
    setShowDetails(false)
  }
  const onKeyPressHandler = () => {
    return null
  }

  const transition = useTransition(showDetails === true, null, {
    from: {
      opacity: 0,
      transform: 'translateX(100%)',
    },
    enter: {
      opacity: 1,
      transform: 'translateX(0%)',
    },
    leave: {
      opacity: 0,
      transform: 'translateX(100%)',
    },
  })

  return (
    <>
      <div className="relative hover:shadow-lg px-1" data-testid="list-item">
        {showDetails && (
          <div className="col-span-4 h-full text-right px-2">
            <button data-testid="close" onClick={handleClose}>
              X
            </button>
          </div>
        )}
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
                  <ListDetail
                    title={title}
                    tagline={tagline}
                    year={year}
                    image={image}
                    description={description}
                  />
                </animated.div>
              </animated.div>
            )
        )}
        {!showDetails && (
          <div
            onKeyPress={onKeyPressHandler}
            role="button"
            tabIndex={0}
            onClick={showMovieDetails}
            data-testid="open"
          >
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-1 gap-1 my-4 ">
                <div className="col-span-1">
                  <img src={image} alt="movie banner" />
                </div>
                <div className="sm:col-span-1 lg:col-span-3 text-center lg:text-left sm:text-center md:text-left mx-4">
                  <p className="text-black font-bold text-xl mb-1">{title}</p>
                  <p className="text-gray-500 text-base  mb-2">{tagline}</p>
                  <p className="text-black font-base text-vase mb-4">
                    {year.substring(0, 4)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default ListItem
