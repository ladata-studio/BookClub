import React from 'react'
import {HeaderContainer, Logo} from './styles'

const HeaderComponent = ({children}) => {
  return (
    <HeaderContainer>
      <a href="/">
        <Logo title="book Club logo" />
      </a>
      {children}
    </HeaderContainer>
  )
}

export default HeaderComponent
