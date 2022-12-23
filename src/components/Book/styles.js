import styled from 'styled-components'

export const Container = styled.figure`
  margin: 0;
  cursor: pointer;
`

export const Cover = styled.img`
  width: 100%;
  margin-bottom: 16px;
  border: 2px solid #000000;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  filter: grayscale(100%);
`

export const Title = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  font-size: 28px;
  line-height: 1.3;

  @media screen and (max-width: 800px) {
    font-size: 22px;
  }
`

export const Author = styled.h4`
  margin: 0;
  font-family: 'Libre Baskerville', serif;
  font-size: 16px;
  line-height: 1.6;
  font-style: italic;
`
