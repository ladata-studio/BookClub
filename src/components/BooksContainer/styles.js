import styled from 'styled-components'

export const Container = styled.div`
  padding: 160px 40px;
  overflow: scroll;
  background-color: #a7e1f8;

  @media screen and (max-width: 750px) {
    padding: 114px 20px;
  }
`
export const H2 = styled.h2`
  margin: 0;
  margin-bottom: 10px;
  font-size: 42px;

  @media screen and (max-width: 750px) {
    font-size: 32px;
  }
`

export const BookList = styled.ul`
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  margin: 0;
  margin-top: 40px;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px 120px;
  list-style: none;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px 60px;
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px 60px;
  }
`
