import React from 'react';
import './CircleSelector.css';


const CircleSelector = (props) => (
    <div className="CircleSelector">
        {props.circles.map((circle, idx) =>
            <button 
            key={circle}
            className={props.current === idx ? "selected" : ""}
            onClick={() => props.handleClick(idx)}
            >
              {props.current === idx ? `CIRCLE ${circle} SELECTED`: `SELECT CIRCLE ${circle}`}
            </button>
        )}
    </div>
);

export default CircleSelector;