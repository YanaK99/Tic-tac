import React from "react";

import { calculateWinner } from "../../utils/calculateWinner";
import Square from "../Square";
import "./Board.css";
import PropTypes from "prop-types";
import {showGreenSquares} from "../../utils/showGreenSquares";


export function Board({ xIsNext, squares, onPlay }) {
    const winner = calculateWinner(squares);
    const nextSquare = xIsNext ? 'X' : 'O';
    const status = winner ? `Winner: ${winner}` : `Next player: ${nextSquare}`;
    const greenLine = showGreenSquares(squares);
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) return;

        const nextSquares = squares.map((square, index) => index === i ? nextSquare : square);

        onPlay(nextSquares);
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square greenLine={greenLine} index={0} value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square greenLine={greenLine}  index={1} value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square greenLine={greenLine}  index={2} value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square greenLine={greenLine}  index={3} value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square greenLine={greenLine}  index={4} value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square greenLine={greenLine}  index={5} value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square greenLine={greenLine}  index={6} value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square greenLine={greenLine}  index={7} value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square greenLine={greenLine}  index={8} value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    );
}

Board.propTypes = {
    xIsNext:PropTypes.bool.isRequired,
    squares: PropTypes.arrayOf(PropTypes.string || PropTypes.object).isRequired,
    onPlay : PropTypes.func.isRequired
}