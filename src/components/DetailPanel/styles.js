import styled from 'styled-components'

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

export const Close = styled.button`
  position: relative;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 9px;
    width: 2px;
    height: 24px;
    background-color: #000000;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`

export const CloseWrapper = styled.div`
  position: fixed;
  top: 120px;
  right: 40px;
  width: 20px;
  height: 20px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 2px solid #000000;
  border-radius: 50%;
  background: #a7e1f8;
  cursor: pointer;
  z-index: 4;
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
