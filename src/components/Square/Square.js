import React from "react";

import "./Square.css";

export const Square = ({ value, onSquareClick }) => (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
