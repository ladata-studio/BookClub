import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  font-family: 'Work Sans', sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

export const Pill = styled.div`
  width: 20px;
  height: 20px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 2px solid #000000;
  border-radius: 30px;
  background-color: #a7e1f8;
`
