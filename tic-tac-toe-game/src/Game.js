import React from 'react';
import Board from './Board'
import Business from './Business'

export default class Game extends React.Component {

    business = new Business(3);

    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(this.business.maxNo ** 2).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (this.business.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = this.business.calculateWinner(current.squares);

        const moves = history.map((step, move, steps) => {
            const diff = this.business.makeStepsDiff(
                move > 0 ? steps[move - 1].squares : step.squares,
                step.squares);
            const moveLocation = `=> (${diff.col}, ${diff.row})`;
            const desc = move ?
                `Go to move #${move} ${moveLocation}` :
                `Go to game start ${moveLocation}`;
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <Board
                    squares={current.squares}
                    onClick={(i) => this.handleClick(i)}
                />
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}
