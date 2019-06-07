export default class Business {
    maxNo = 1;

    constructor(maxNo) {
        this.maxNo = maxNo || 1;
    }

    static get noDiff() {
        return {
            index: null,
            col: null,
            row: null
        };
    }

    makeStepsDiff(prevSquares, currentSquares) {
        if (!Array.isArray(prevSquares) || !Array.isArray(currentSquares)) {
            throw new TypeError();
        }
        if (prevSquares.length !== currentSquares.length) {
            throw new RangeError();
        }
        let length = prevSquares.length;
    
        for (var i = 0; i < length; i++) {
            if (prevSquares[i] !== currentSquares[i]) {
                break;
            }
        }
        if (i === length) {
            return Business.noDiff;
        }
    
        return {
            index: i,
            col: 1 + i % this.maxNo,
            row: 1 + Math.trunc(i / this.maxNo),
        };
    }

    // TODO Rewrite implementation because current logic is actual for maxNo == 3
    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
}