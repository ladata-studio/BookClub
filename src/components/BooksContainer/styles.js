import styled from 'styled-components'

export const Container = styled.div`
  padding: 160px 40px;
  overflow: scroll;
  background-color: #a7e1f8;

  @media screen and (max-width: 800px) {
    padding: 114px 20px;
  }
`

export const H2 = styled.h2`
  margin: 0;
  margin-bottom: 10px;
  font-size: 42px;

  @media screen and (max-width: 800px) {
    font-size: 32px;
  }
`

export const BookList = styled.div`
  max-width: 1200px;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 120px;
  grid-column-gap: 40px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 60px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
  }
`