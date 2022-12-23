import React from 'react'
import {HeaderContainer, Logo} from './styles'

const HeaderComponent = () => {
  return (
    <HeaderContainer>
      <a href="/">
        <Logo title="book Club logo" />
      </a>
    </HeaderContainer>
  )
}

export default HeaderComponent
