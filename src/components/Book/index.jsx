import React from 'react'
import {Author, Container, Cover, Title} from './styles'

const BookComponent = ({book}) => {
  return (
    <Container>
      <Cover
        src={book.image}
        alt={`Book cover for ${book.title} by ${book.author}`}
      />
      <figcaption>
        <Title>{book.title}</Title>
        <Author>{book.author}</Author>
      </figcaption>
    </Container>
  )
}

export default BookComponent
