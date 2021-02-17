import React from 'react'
import '../links/links.css'
import {Link} from 'react-router-dom'

const Links = () => {
    return (
        <ul className="d-flex">
            <li>
                <Link to="/">Portfolio</Link>
            </li>
            <li>
                <Link to="/stocks">Stocks</Link>
            </li>
            <li>
                <Link to="/currencies">Currencies</Link>
            </li>
            <li>
                <Link to="/bonds">Bonds</Link>
            </li>
            <li>
                <Link to="/etfs">ETFs</Link>
            </li>
        </ul>
    )
}

export default Links