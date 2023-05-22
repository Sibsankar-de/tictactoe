import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <div className='container'>
            <h1 className='tt-game-heading tt-home-head'>Tic Tac Toe</h1>
            <ul className='tt-home-menu'>
                <li className="tt-home-menu-li"><Link to="/game-player-name">New Game</Link></li>
                <li className="tt-home-menu-li"><a href="">Leader Board</a></li>
            </ul>
        </div>
    )
}
