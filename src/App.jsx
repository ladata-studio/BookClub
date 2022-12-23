import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import BooksContainer from './components/BooksContainer'
import DetailPanel from './components/DetailPanel'
import Header from './components/Header'
import Search from './components/Search'
import './styles.js'
import {GlobalStyle} from './styles.js'

const App = () => {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)
  const [filteredBooks, setFilteredBooks] = useState([])

  useEffect(() => {
    console.log(selectedBook !== null)
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://book-club-json.herokuapp.com/books'
        )
        const books = await response.json()
        setBooks(books)
        setFilteredBooks(books)
      } catch (errors) {
        console.log(errors)
      }
    }

    fetchData()
  }, [selectedBook])

  const selectBook = (book) => {
    setSelectedBook(book)
  }

  const closePanel = () => {
    setSelectedBook(null)
  }

  const filterBooks = (searchTerm) => {
    console.log(searchTerm)
    const stringSearch = (bookAttribute, searchTerm) =>
      bookAttribute.toLowerCase().includes(searchTerm.toLowerCase())

    if (!searchTerm) {
      setFilteredBooks(books)
    } else {
      setFilteredBooks(
        books.filter(
          (book) =>
            stringSearch(book.title, searchTerm) ||
            stringSearch(book.author, searchTerm)
        )
      )
    }
  }

  const hasFiltered = books.length !== filteredBooks.length

  return (
    <>
      <Header>
        <Search onChange={filterBooks} />
      </Header>
      <GlobalStyle />
      {books.length > 0 && (
        <BooksContainer
          books={filteredBooks}
          hasFiltered={hasFiltered}
          onSelect={selectBook}
          isPanelOpen={selectedBook !== null}
        />
      )}
      {selectedBook && (
        <DetailPanel book={selectedBook} closePanel={closePanel} />
      )}
    </>
  )
}

export default App
