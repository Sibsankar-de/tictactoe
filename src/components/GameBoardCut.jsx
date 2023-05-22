import React from 'react'

export const GameBoardCut = (props) => {
    const cutOut = props.cutOut
    return (
        <>
            {cutOut.r1 && <div className={`tt-cut-stick ${'stick-r'}`} style={{ transform: 'translate(1em, -5.4em) scaleX(1)' }}></div>}
            {cutOut.r2 && <div className={`tt-cut-stick ${'stick-r'}`}></div>}
            {cutOut.r3 && <div className={`tt-cut-stick ${'stick-r'}`} style={{ transform: 'translate(1em, 5.4em) scaleX(1)' }}></div>}
            {cutOut.c1 && <div className={`tt-cut-stick ${'stick-c'}`} style={{ transform: 'translate(-4.5em, 0) rotate(90deg) scaleX(1)' }}></div>}
            {cutOut.c2 && <div className={`tt-cut-stick ${'stick-c'}`}></div>}
            {cutOut.c3 && <div className={`tt-cut-stick ${'stick-c'}`} style={{ transform: 'translate(6.4em, 0) rotate(90deg) scaleX(1)' }}></div>}
            {cutOut.corn1 && <div className={`tt-cut-stick ${'stick-corn'}`} style={{ transform: 'translate(-1em, 0) rotate(45deg) scaleX(1)' }}></div>}
            {cutOut.corn2 && <div className={`tt-cut-stick ${'stick-corn'}`} style={{ transform: 'translate(-1em, 0) rotate(-45deg) scaleX(1)' }}></div>}
        </>
    )
}
