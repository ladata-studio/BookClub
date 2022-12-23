import styled from 'styled-components'
import {Pill} from '../../styles'
import {ReactComponent as SearchIcon} from '../../assets/search.svg'

export const SearchContainer = styled(Pill)`
  width: ${({showOnDesktop}) => (showOnDesktop ? '420px' : '20px')};
  transition: 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  @media screen and (max-width: 800px) {
    width: 85%;
  }

  input,
  button {
    display: ${({showOnDesktop}) => (showOnDesktop ? 'block' : 'none')};

    @media screen and (max-width: 800px) {
      display: block;
    }
  }
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

export const Icon = styled(SearchIcon)`
  width: 20px;
  cursor: pointer;
`

export const Wrapper = styled.div`
  @media screen and (max-width: 800px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid #000000;
    background-color: #ffbccc;
    z-index: 1;
  }
`
