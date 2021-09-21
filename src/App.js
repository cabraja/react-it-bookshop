import React,{useState,useEffect} from 'react'
// Components
import Header from './Header'
import Book from './Book'
import WelcomeScreen from './WelcomeScreen'

const App = () => {
    
    const URL_NEW = 'https://api.itbook.store/1.0/new'
    const URL_SEARCH = 'https://api.itbook.store/1.0/search/'
    const [searchValue, setSearchValue] = useState('')
    const [books, setBooks] = useState([])

  useEffect(() => {
        fetch(URL_NEW)
        .then(res => res.json())
        .then(data => setBooks(data.books))
    },[])

    const handleSubmit = () => {
        fetch(`${URL_SEARCH}${searchValue}`)
        .then(res => res.json())
        .then(data => setBooks(data.books))
    }

    return (
        <>

        <WelcomeScreen />

        <Header searchValue={searchValue} setSearchValue={setSearchValue} handleSubmit={handleSubmit}/>
        <main>
        {
            books.map(book => <Book key={book.isbn13} {...book}/>)
        }
        </main>
        </>
    )
}

export default App
