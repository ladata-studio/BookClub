import React, {useState} from 'react'
import {Close} from '../../styles'
import {Icon, Input, SearchContainer, Wrapper} from './styles'

const SearchComponent = ({onChange}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [showOnDesktop, setShowOnDesktop] = useState(false)

  const onChangeInput = ({target}) => {
    setSearchTerm(target.value)
    onChange(target.value)
  }

  const clearInput = () => {
    setSearchTerm('')
    onChange('')
  }

  const showSearch = () => {
    setShowOnDesktop(!showOnDesktop)
  }

  return (
    <Wrapper>
      <SearchContainer showOnDesktop={showOnDesktop}>
        <Icon onClick={showSearch} />
        <Input
          type="text"
          name="search"
          autoComplete="off"
          value={searchTerm}
          onChange={onChangeInput}
        />
        <Close onClick={clearInput} />
      </SearchContainer>
    </Wrapper>
  )
}

export default SearchComponent
