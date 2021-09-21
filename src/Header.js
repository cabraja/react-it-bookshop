import React from 'react'
import logo from './assets/img/logo.jpg'
import './assets/css/header.css'

const Header = ({searchValue,setSearchValue,handleSubmit}) => {
    return (
        <header>
            <img  src={logo} alt="logo" height="50px" />
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit()
            }}>
                <input onChange={(e) => {setSearchValue(e.target.value)}} type="text" value={searchValue} placeholder="Search..." id="search" />
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
        </header>
    )
}

export default Header
