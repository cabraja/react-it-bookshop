import React,{useState,useEffect} from 'react'
// Components
import Header from './Header'
import Book from './Book'
import WelcomeScreen from './WelcomeScreen'

const App = () => {
    
    const URL_NEW = 'https://api.itbook.store/1.0/new'
    const URL_SEARCH = 'https://api.itbook.store/1.0/search/'
    const [searchValue, setSearchValue] = useState('')
    const [showWelcome, setShowWelcome] = useState(true)
    const [books, setBooks] = useState([])

  useEffect(() => {
        fetch(URL_NEW)
        .then(res => res.json())
        .then(data => setBooks(data.books))
    },[])

    useEffect(() => {
        if(searchValue){
            fetch(`${URL_SEARCH}${searchValue}`)
            .then(res => res.json())
            .then(data => setBooks(data.books))
        }
    }, [searchValue])

    return (
        <>

        {
            showWelcome && < WelcomeScreen 
                searchValue={searchValue} 
                setSearchValue={setSearchValue} 
                showWelcome={showWelcome} 
                setShowWelcome={setShowWelcome} />
        }

        <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
        <main>
        {
            books.map(book => <Book key={book.isbn13} {...book}/>)
        }
        </main>

        <footer>
            <h3>Books.IT, books for programming nerds</h3>
            <h4>Made by Mihajlo Cabraja</h4>
        </footer>
        </>
    )
}

export default App
