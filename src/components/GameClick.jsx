import React, { useState } from 'react'
import { motion } from 'framer-motion';

export const GameClick = (props) => {
    const [isClick, setIsClick] = useState(true);
    const player1 = props.player1;
    const player2 = props.player2;
    const [circleClick, setCircleClick] = useState(false);
    const [crossClick, setCrossClick] = useState(false);

    const boxClickHandler = () => {
        if (player1 && !player2) {
            setCrossClick(true);
            setCircleClick(false);
            props.changePlayer('player2');
            props.addPlayer1Index(props.index);
            setIsClick(false)
        }
        else if (!player1 && player2) {
            setCircleClick(true);
            setCrossClick(false);
            props.changePlayer('player1');
            props.addPlayer2Index(props.index);
            setIsClick(false)
        }
    }

    return (
        <>
            <li className='list-item'>
                <motion.div
                    whileTap={isClick &&{
                      scale: 0.8,
                      rotate: -90,
                      borderRadius: "100%"
                    }}
                    onClick={isClick ? boxClickHandler : () => { }}>
                    {
                        <>
                            {circleClick && <i className="bi bi-circle tt-circle-color tt-icon-size" />}
                            {crossClick && <i className="bi bi-x-lg tt-cross-color tt-icon-size" />}
                        </>}
                </motion.div>
            </li>
        </>
    )
}
