import React from "react";

import "./Square.css";
import PropTypes from "prop-types";

export const Square = ({ value, onSquareClick, index, greenLine }) => {
    const isGreenSquare =greenLine ? greenLine.some((currentIndex) => currentIndex === index) : false
    const className = isGreenSquare ? "square square-winner"  : "square";

    return (
            <button className={className} onClick={onSquareClick}>
                {value}
            </button>
        )};

Square.propTypes = {
    value:PropTypes.string,
    onSquareClick : PropTypes.func.isRequired,
    index : PropTypes.number.isRequired,
    greenLine: PropTypes.arrayOf(PropTypes.number)
}