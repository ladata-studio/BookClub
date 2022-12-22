import React from 'react'
import Book from '../Book'
import {BookList, Container} from './styles'

const BooksContainer = ({books}) => {
  return (
    <Container>
      <BookList>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </BookList>
    </Container>
  )
}

export default BooksContainer
