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

}