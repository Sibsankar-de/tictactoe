import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <div className='container'>
            <h1 className='tt-game-heading tt-home-head'>Tic Tac Toe</h1>
            <ul className='tt-home-menu'>
                <li className="tt-home-menu-li"><Link to="/game-player-name"><i className="ri-group-fill"></i> Two Player</Link></li>
                <li className="tt-home-menu-li"><a href=""><i className="ri-robot-2-fill"></i> Single Player</a></li>
            </ul>
        </div>
    )
}
