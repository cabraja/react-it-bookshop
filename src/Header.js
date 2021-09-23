import React,{useState} from 'react'
import logo from './assets/img/logo.jpg'
import './assets/css/header.css'

const Header = ({searchValue,setSearchValue,handleSubmit}) => {

    const [newValue, setNewValue] = useState('')    

    return (
        <header>
            <img  src={logo} alt="logo" height="50px" />
            <form onSubmit={(e) => {
                e.preventDefault();
                setSearchValue(newValue)
                setNewValue('')
            }}>
                <input type="text" onChange={(e) => setNewValue(e.target.value)} value={newValue} placeholder="Search..." id="search" />
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
        </header>
    )
}

export default Header
