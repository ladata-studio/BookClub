import React, {useEffect, useState} from 'react'
import Book from '../Book'
import {debounce} from 'lodash-es'
import {BookList, Container, H2} from './styles'

const BooksContainer = ({books, hasFiltered, onSelect, isPanelOpen}) => {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = debounce(() => {
      setScroll(window.scrollY)
    }, 100)

    if (!isPanelOpen) {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isPanelOpen])

  useEffect(() => {
    if (!isPanelOpen) {
      window.scroll(0, scroll)
    }
  }, [isPanelOpen, scroll])

  return (
    <Container isPanelOpen={isPanelOpen} top={scroll}>
      <H2>{hasFiltered ? 'Search results' : 'All books'}</H2>
      <BookList>
        {books.map((book) => (
          <Book key={book.id} book={book} onSelect={onSelect} />
        ))}
      </BookList>
    </Container>
  )
}

export default BooksContainer
