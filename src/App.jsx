import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import BooksContainer from './components/BooksContainer'
import DetailPanel from './components/DetailPanel'
import Header from './components/Header'
import './styles.js'
import {GlobalStyle} from './styles.js'

const App = () => {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)

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

  const selectBook = (book) => {
    setSelectedBook(book)
  }

  return (
    <>
      <Header />
      <GlobalStyle />
      {books.length > 0 && (
        <BooksContainer books={books} onSelect={selectBook} />
      )}
      {selectedBook && <DetailPanel book={selectedBook} />}
    </>
  )
}

export default App
