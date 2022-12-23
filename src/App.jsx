import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
import './styles.js'
import {GlobalStyle} from './styles.js'

const App = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://book-club-json.herokuapp.com/books'
        )
        const books = await response.json()
        setBooks(books)
      } catch (errors) {
        console.log(errors)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <Header />
      <GlobalStyle />
      {books.length > 0 && <BooksContainer books={books} />}
    </>
  )
}

export default App
