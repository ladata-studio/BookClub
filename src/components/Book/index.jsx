import React from 'react'
import {Author, Container, Cover, Title} from './styles'

const BookComponent = ({book, onSelect, isLarge}) => {
  return (
    <Container onClick={() => onSelect(book)} isLarge={isLarge}>
      <Cover
        src={book.image}
        alt={`Book cover for ${book.title} by ${book.author}`}
      />
      <figcaption>
        <Title isLarge={isLarge}>{book.title}</Title>
        <Author>by {book.author}</Author>
      </figcaption>
    </Container>
  )
}

export default BookComponent
