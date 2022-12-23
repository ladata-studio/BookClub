import React from 'react'
import Book from '../Book'
import {BookList, Container, H2} from './styles'

const BooksContainer = ({books, onSelect}) => {
  return (
    <Container>
      <H2>All books</H2>
      <BookList>
        {books.map((book) => (
          <Book key={book.id} book={book} onSelect={onSelect} />
        ))}
      </BookList>
    </Container>
  )
}

export default BooksContainer
