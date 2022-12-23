import React from 'react'
import Book from '../Book'
import {BG, Close, CloseWrapper, Em, P, Panel} from './styles'

const DetailPanelComponent = ({book, closePanel}) => {
  return (
    <>
      <BG onClick={closePanel} />
      <Panel>
        <CloseWrapper onClick={closePanel}>
          <Close />
        </CloseWrapper>
        <Book book={book} isLarge={true} />
        <P>{book.description}</P>
        <P>
          <Em>Published in {book.published}</Em>
        </P>
      </Panel>
    </>
  )
}

export default DetailPanelComponent
