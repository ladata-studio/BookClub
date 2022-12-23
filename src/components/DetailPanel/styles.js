import styled from 'styled-components'
import {Pill} from '../../styles'

export const Panel = styled.article`
  box-sizing: border-box;
  width: 660px;
  height: calc(100vh - 82px);
  padding: 40px 120px 60px 40px;
  overflow: scroll;
  position: fixed;
  right: 0;
  bottom: 0;
  background-color: #ffe581;
  border-left: 2px solid #000000;
  z-index: 2;

  @media screen and (max-width: 800px) {
    width: 100vw;
    height: calc(100vh - 75px);
    padding: 40px 86px 20px 20px;
    right: unset;
    border-left: none;
    z-index: 3;
  }
`
export const P = styled.p`
  margin: 0;
  margin-top: 30px;
  font-family: 'Libre Baskerville', serif;
  font-size: 16px;
  line-height: 1.6;
`

export const Em = styled.em`
  font-style: italic;
`

export const CloseWrapper = styled(Pill)`
  position: fixed;
  top: 120px;
  right: 40px;
  cursor: pointer;
  z-index: 4;

  @media screen and (max-width: 800px) {
    top: unset;
    right: 20px;
    bottom: 20px;
  }
`

export const BG = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  z-index: 1;
`
