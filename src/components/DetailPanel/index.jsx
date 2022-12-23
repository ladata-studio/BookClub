import React from 'react'
import { Close } from '../../styles'
import Book from '../Book'
import {BG, CloseWrapper, Em, P, Panel} from './styles'

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
