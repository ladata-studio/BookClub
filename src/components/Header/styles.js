import styled from 'styled-components'
import {ReactComponent as LogoSVG} from '../../assets/logo.svg'

export const Logo = styled(LogoSVG)`
  width: 270px;
  height: 40px;
  display: block;

  @media screen and (max-width: 800px) {
    width: 222px;
    height: 33px;
  }
`

export const HeaderContainer = styled.header`
  box-sizing: border-box;
  width: 100vw;
  padding: 20px 40px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #000000;
  background-color: #ffbccc;
  z-index: 3;

  @media screen and (max-width: 800px) {
    padding: 20px;
  }
`
