import React from 'react'

import { Link } from 'react-router-dom'

import './style.css';

const Header = () => {
    return (
        <header className="App-header">
            <Link to={`/`}>
                <h1 className="App-title">Recipe List</h1>
            </Link>
            <nav>
                <Link to={`/create`}>Create a recipe</Link>
                <Link to={`/my-recipes`}>My recipes</Link>
            </nav>
        </header>
    )
}

export default Header