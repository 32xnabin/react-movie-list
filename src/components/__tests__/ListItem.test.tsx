import { render, fireEvent } from '@testing-library/react'
import ListItem from '../ListItem'
import Movie from '../../services/api.types'

const testMovie: Movie = {
  description:
    "A short documentary that looks at how one Filipino family reacts to having a gay son. Revisiting unreleased audio recordings of fights from inside his own home, documentary filmmaker Drama Del Rosario shares his story of being outed as a teenager, dealing with his family's reaction, and the society's percipience on homosexuality. Beyond coming out, the film speaks about how parents learn to embrace their children unconditionally.",
  image: 'https://image.tmdb.org/t/p/w500//wqQlp6kBQ9WKNBxklSINvEwqnGx.jpg',
  tagline: 'Drama Del Rosario',
  title: 'In This Family',
  year: '2017-12-05',
}
/**
 * @jest-environment jsdom
 */
function renderListItem(props: Partial<Movie> = {}) {
  const defaultProps: Movie = testMovie
  return render(<ListItem {...defaultProps} {...props} />)
}
/**
 * @jest-environment jsdom
 */
describe('<ListItem />', () => {
  /**
   * @jest-environment jsdom
   */
  test('should display list', async () => {
    const { findByTestId } = renderListItem()

    const listItem = await findByTestId('list-item')
    const open = await findByTestId('open')

    expect(listItem).toContainElement(listItem)
    expect(listItem).toContainElement(open)
  })
  /**
   * @jest-environment jsdom
   */
  test('should click the open button', async () => {
    const { findByTestId } = renderListItem(testMovie)
    const open = await findByTestId('open')

    fireEvent.click(open)
  })
})
