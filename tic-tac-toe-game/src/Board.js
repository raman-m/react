import React from 'react';
import Square from './Square'

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.maxNo = props.maxNo;
    }

    for(getter, times = this.maxNo) {
        const arr = Array(times);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = getter(i);
        }
        return arr;
    }

    renderSquare(i) {
        return (
            <Square key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
                selected={this.props.squareIndex === i}
            />
        );
    }

    render() {
        return (
            <div className="game-board">
                {this.for((rowNo) => (
                    <div key={rowNo} className="board-row">
                        {this.for((i) => this.renderSquare(rowNo * this.maxNo + i))}
                    </div>
                ))}
            </div>
        );
    }
}
