import React, { useState, useEffect } from 'react';

export const Button = (props) => {
    const [clickStart, setClickStart] = useState(false)
    const clickEvent = {
        onMouseDown: () => setClickStart(true),
        onMouseUp: () => setClickStart(false)
    }
    return (
        <div className={`tt-btn-box ${clickStart && 'tt-btn-box-click'}`} {...clickEvent}>
            <button {...props}>
                {props.children}
            </button>
        </div>
    )
}
