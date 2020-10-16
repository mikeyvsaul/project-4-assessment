import React from 'react';
import './Circles.css';


const Circles = (props) => (
    <div className="Circles">
        {props.circles.map((circle, idx) =>
          <div
          key={circle}
          className={props.current === idx ? "selected" : ""}
          >
            {circle}
          </div>
        )}
    </div>
);

export default Circles;