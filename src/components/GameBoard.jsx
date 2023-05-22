import React, { useEffect, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { GameClick } from './GameClick';
import celebSvg from '../svg/celebration.svg'
import celebSvg2 from '../svg/celebration2.svg'
import { GameBoardCut } from './GameBoardCut';
import { useNavigate } from 'react-router-dom';


const arangerAI = (list) => {
    var twoWordList = [];
    var threeWordList = [];

    for (let i in list) {
        for (let j in list) {
            if (list[i] !== list[j]) {
                twoWordList.push(list[i].toString() + list[j].toString());
            }
        }
    }

    for (let i in twoWordList) {
        for (let j in list) {
            if (!twoWordList[i].includes(list[j])) {
                threeWordList.push(twoWordList[i] + list[j].toString());
            }
        }
    }
    return threeWordList;
}

export const GameBoard = () => {
    const loopList1 = [1, 2, 3];
    const loopList2 = [4, 5, 6];
    const loopList3 = [7, 8, 9];
    const [player1, setPlayer1] = useState(true);
    const [player2, setPlayer2] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [player1List, setPlayer1List] = useState([]);
    const [player2List, setPlayer2List] = useState([]);
    const [gameWinner, setGameWinner] = useState('');

    const navigate = useNavigate();

    let player;
    if (localStorage.getItem('playerName') === null) {
        player = {
            player1: '',
            player2: '',
        }
    }
    else {
        player = JSON.parse(localStorage.getItem('playerName'));
    }

    let winTime;
    if (sessionStorage.getItem('winTime') === null) {
        winTime = { player1: 0, player2: 0 };
    }
    else winTime = JSON.parse(sessionStorage.getItem('winTime'));

    let matchStart;
    if (sessionStorage.getItem('matchStart') === null) {
        matchStart = false;
    }
    else {
        matchStart = JSON.parse(sessionStorage.getItem('matchStart'));
    }

    const [cutOut, setCutOut] = useState({
        r1: false,
        r2: false,
        r3: false,
        c1: false,
        c2: false,
        c3: false,
        corn1: false,
        corn2: false,
    })

    const changePlayer = (player) => {
        if (player === 'player1') {
            setPlayer1(true);
        }
        else {
            setPlayer1(false);
        }
    }

    useEffect(() => {
        setPlayer2(!player1);
        setClickCount(clickCount + 1);
    }, [player1]);

    useEffect(() => {
        if (clickCount === 10) {
            setTimeout(() => setGameOver(true), 700);
            setTimeout(() => navigate('/game-over'), 4000);
        }
    })

    const addPlayer1Index = (index) => {
        setPlayer1List([...player1List, index])
    }

    const addPlayer2Index = (index) => {
        setPlayer2List([...player2List, index])
    }

    const checkPossibilities = async(list, changeObj) => {
        for (let i in arangerAI(list)) {
            if (arangerAI(player1List).includes(arangerAI(list)[i])) {
                setCutOut(changeObj);
                setGameWinner(player.player1)
                sessionStorage.setItem('winTime', JSON.stringify({ ...winTime, player1: Number(winTime.player1) + 1 }));
                setTimeout(() => setGameOver(true), 800);
                setTimeout(() => navigate('/game-over'), 4000)
                sessionStorage.setItem('matchStart', false);

            }
            else if (arangerAI(player2List).includes(arangerAI(list)[i])) {
                setCutOut(changeObj);
                setGameWinner(player.player2)
                sessionStorage.setItem('winTime', JSON.stringify({ ...winTime, player2: Number(winTime.player2) + 1 }));
                setTimeout(() => setGameOver(true), 800);
                setTimeout(() => navigate('/game-over'), 4000)
                sessionStorage.setItem('matchStart', false);
            }
        }
    }
    useEffect(() => {
        checkPossibilities([1, 2, 3], { ...cutOut, r1: true });
        checkPossibilities([4, 5, 6], { ...cutOut, r2: true });
        checkPossibilities([7, 8, 9], { ...cutOut, r3: true });
        checkPossibilities([1, 4, 7], { ...cutOut, c1: true });
        checkPossibilities([2, 5, 8], { ...cutOut, c2: true });
        checkPossibilities([3, 6, 9], { ...cutOut, c3: true });
        checkPossibilities([1, 5, 9], { ...cutOut, corn1: true });
        checkPossibilities([3, 5, 7], { ...cutOut, corn2: true });
    }, [player1]);

    return (
        <div className='container'>
            <h1 className='tt-game-heading'>Tic Tac Toe</h1>
            <h3>Let's Play the Game</h3>
            <div className="tt-game-box">
                <div className="tt-game-board">
                    <span className="tt-game-board-head">
                        <section className='tt-br-rignt'>
                            <span>
                                <h5>{player.player1}</h5>
                                <i className="bi bi-x-lg tt-cross-color" />
                            </span>
                            {player1 && <div className='tt-board-head-br-bottom tt-cross-color'></div>}
                        </section>
                        <section>
                            <span>
                                <h5>{player.player2}</h5>
                                <i className="bi bi-circle tt-circle-color" />
                            </span>
                            {player2 && <div className='tt-board-head-br-bottom tt-circle-color'></div>}
                        </section>
                    </span>
                    <div className="tt-game-board-box">
                        <div className="tt-game-board-box-items">
                            <GameBoardCut cutOut={cutOut} />
                            <section className='tt-game-board-box-row-set'>
                                {loopList1.map(index => {
                                    return <GameClick index={index} player1={player1} player2={player2} changePlayer={changePlayer} key={index} addPlayer1Index={addPlayer1Index} addPlayer2Index={addPlayer2Index} />
                                })}
                            </section>
                            <section className='tt-game-board-box-row-set'>
                                {loopList2.map(index => {
                                    return <GameClick index={index} player1={player1} player2={player2} changePlayer={changePlayer} key={index} addPlayer1Index={addPlayer1Index} addPlayer2Index={addPlayer2Index} />
                                })}
                            </section>
                            <section className='tt-game-board-box-row-set'>
                                {loopList3.map(index => {
                                    return <GameClick index={index} player1={player1} player2={player2} changePlayer={changePlayer} key={index} addPlayer1Index={addPlayer1Index} addPlayer2Index={addPlayer2Index} />
                                })}
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            {gameOver && <div className='tt-game-over-box'>
                {gameWinner && <img src={celebSvg2} alt="" className='tt-g-over-img-anim' />}
                <h1 className='text-center text-break'>
                    {gameWinner ? 'Yeah !!' : 'OOps !!!'} <br />
                    {gameWinner ? gameWinner + ' ' + 'win the match' : 'This match is Draw'}
                </h1>
                {gameWinner && <img src={celebSvg} alt="" className='tt-g-over-shake-anim' />}
            </div>}
        </div>
    )
}
