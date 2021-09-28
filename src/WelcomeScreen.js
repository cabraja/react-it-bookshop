import React from 'react'
import './assets/css/welcome.css'

const WelcomeScreen = ({searchValue,setSearchValue,showWelcome,setShowWelcome,handleSubmit}) => {

    const categories = ['Web','Games','Data','Python','Javascript','C++','Java','Ruby','Go','SQL','PHP','React','Angular','Vue.js']

    return (
        <div id="welcome-wrapper">
            <div id="welcome-container">
                <h1>Welcome to the Books.IT</h1>
                <h2>Lets start by picking the category you are interested in...</h2>
                <div className="categories">
                    {
                    categories.map((item,index) => {
                        return(
                            <button key={index} className="cat-button" onClick={() => {
                                setSearchValue(item)
                                setTimeout(() => {
                                    setShowWelcome(false)
                                },[600])
                            }}>{item}</button>
                        )
                    })
                }
                </div>
                <h2>...or maybe you just want to see what is new!</h2>
                <button id="new-books-button" onClick={() => setShowWelcome(false)}>New Books</button>
            </div>
        </div>
    )
}

export default WelcomeScreen
