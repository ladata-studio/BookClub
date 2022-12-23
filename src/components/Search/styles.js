import styled from 'styled-components'
import {Pill} from '../../styles'

export const SearchContainer = styled(Pill)`
  width: 420px;
`

export const Input = styled.input`
  padding: 6px;
  flex-grow: 1;
  font-family: 'Work Sans', sans-serif;
  font-size: 18px;
  font-weight: 700;
  border: none;
  background: inherit;

  &:focus {
    outline: none;
  }
`
