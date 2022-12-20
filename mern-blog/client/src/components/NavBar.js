import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <header className="text-center font-bold sticky top-0 text-lg text-white bg-gray-900">
                <nav>
                    <ul className="menu">
                        <li className="inline-block p-5">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="inline-block p-5">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="inline-block p-5">
                            <Link to="/articles">Articles</Link>
                        </li>
                        <li className="inline-block p-5">
                            <Link to="/articlesList">ArticlesList</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default NavBar;