import React from 'react'
import {Input, SearchContainer} from './styles'

const SearchComponent = ({onChange}) => {
  return (
    <SearchContainer>
      <Input
        type="text"
        name="search"
        autoComplete="off"
        onChange={({target}) => onChange(target.value)}
      />
    </SearchContainer>
  )
}

export default SearchComponent
