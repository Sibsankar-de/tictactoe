import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react';
import { Button } from './modules/button-component';

export const GamePlayerPage = () => {
    let player;
    if (localStorage.getItem('playerName') === null) {
        player = {
            player1: 'player 1',
            player2: 'player 2',
        }
    }
    else {
        player = JSON.parse(localStorage.getItem('playerName'));
    }
    const navigate = useNavigate();

    const player1Ref = useRef(null);
    const player2Ref = useRef(null);
    const [playerName, setPlayerName] = useState(player)

    useEffect(() => {
        player1Ref.current.value = playerName.player1;
        player2Ref.current.value = playerName.player2;
    })
    const clickHandler = () => {
        if (playerName.player1 || playerName.player2)
            localStorage.setItem('playerName', JSON.stringify(playerName));
        navigate('/game-start')
    }

    return (
        <div className='container'>
            <h1 className='tt-game-heading'>Tic Tac Toe</h1>
            <div>
                <form className='tt-player-name-form'>
                    <input type="text" name="" ref={player1Ref} id="player1" placeholder='Player1 name' onChange={(e) => setPlayerName({ ...playerName, player1: e.target.value })} />
                    <input type="text" name="" ref={player2Ref} id="player2" placeholder='Player2 name' onChange={(e) => setPlayerName({ ...playerName, player2: e.target.value })} />
                </form>
            </div>
            <div><Button className="btn tt-play-btn" onClick={clickHandler}>Continue</Button></div>
        </div>
    )
}


export const GameStartPage = () => {
    let player;
    if (localStorage.getItem('playerName') === null) {
        player = {
            player1: 'player 1',
            player2: 'player 2',
        }
    }
    else {
        player = JSON.parse(localStorage.getItem('playerName'));
    }

    let matchStart;
    if (sessionStorage.getItem('matchStart') === null) {
        matchStart = false;
    }
    else {
        matchStart = JSON.parse(sessionStorage.getItem('matchStart'));
    }

    const navigate = useNavigate();

    const clickHandler = () => {
        sessionStorage.setItem('matchStart', true);
        setTimeout(() => { navigate('/game-run'); window.location.reload() }, 500);
    }

    return (
        <div className='container'>
            <h1 className='tt-game-heading'>Tic Tac Toe</h1>
            <div className='tt-player-selection-box'>
                <span>
                    <p className='tt-win-player-show-box'>{player.player1}</p>:<i className="bi bi-x-lg tt-cross-color tt-icon-size" />
                </span>
                <span>
                    <p className='tt-win-player-show-box'>{player.player2}</p>:<i className="bi bi-circle tt-circle-color tt-icon-size" />
                </span>
            </div>
            <div><Button className="btn tt-play-btn" onClick={clickHandler}>Start</Button></div>

        </div>
    )
}

export const GameOverPage = () => {
    let player;
    if (localStorage.getItem('playerName') === null) {
        player = {
            player1: 'player 1',
            player2: 'player 1',
        }
    }
    else {
        player = JSON.parse(localStorage.getItem('playerName'));
    }

    let playerData;
    if (sessionStorage.getItem('playerData') === null) {
        playerData = { player1: { name: player.player1, winTime: 0 }, player2: { name: player.player2, winTime: 0 } };
    }
    else playerData = JSON.parse(sessionStorage.getItem('playerData'));

    const navigate = useNavigate();

    return (
        <div className='container'>
            <h1 className='tt-game-heading'>Tic Tac Toe</h1>
            <div className='tt-player-selection-box'>
                <span>
                    <p className='tt-win-player-show-box'>{playerData.player1.name}</p>: <p className='tt-win-time-box'>{playerData.player1.winTime}</p>
                </span>
                <span>
                    <p className='tt-win-player-show-box'>{playerData.player2.name}</p>: <p className='tt-win-time-box'>{playerData.player2.winTime}</p>
                </span>
            </div>
            <div><Button className="btn tt-play-btn" onClick={() => navigate('/game-run')}>Rematch</Button></div>
            <div className='mt-5'><Button className='btn' onClick={() => navigate('/')} style={{ cursor: 'pointer' }}><h4 >Back to Home</h4></Button></div>

        </div>
    )
}
