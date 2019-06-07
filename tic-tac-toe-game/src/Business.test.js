import Business from './Business'

describe('Business', () => {

    describe('makeStepsDiff', () => {
        it('should throw TypeError exception having non-array args', () => {
            // Arrange
            let sut = new Business();

            expect(() => sut.makeStepsDiff())
                .toThrowError(TypeError());
            expect(() => sut.makeStepsDiff(1, '[]'))
                .toThrowError(TypeError());
            expect(() => sut.makeStepsDiff({}, []))
                .toThrowError(TypeError());
            expect(() => sut.makeStepsDiff([], {}))
                .toThrowError(TypeError());
        });
        it('should throw RangeError exception having different length on both arrays', () => {
            // Arrange
            let sut = new Business();

            expect(() => sut.makeStepsDiff([], [1]))
                .toThrowError(RangeError());
            expect(() => sut.makeStepsDiff([1], []))
                .toThrowError(RangeError());
        });
        it('returns no diff for empty arrays', () => {
            // Arrange
            let sut = new Business();

            expect(sut.makeStepsDiff([], []))
                .toEqual(Business.noDiff);
        });
        it('returns no diff for arrays with the same items', () => {
            // Arrange
            let sut = new Business();

            expect(sut.makeStepsDiff(
                [1, '2', null, 3],
                [1, '2', null, 3])
            ).toEqual(Business.noDiff);
        });
        it('returns diff. Happy path!', () => {
            // Arrange
            let sut = new Business(3);

            expect(sut.makeStepsDiff(
                [1, '2', 3],
                [1, '2', 4])
            ).toEqual({
                index: 2,
                col: 3,
                row: 1,
            });
            expect(sut.makeStepsDiff(
                [1, 2, 3, 4, 5, 6, 7, 8, 9],
                [1, 2, 3, 4, 0, 6, 7, 8, 9])
            ).toEqual({
                index: 4,
                col: 2,
                row: 2,
            });
        });
    }); // makeStepsDiff

    describe('calculateWinner', () => {

        it('returns no winner at the start of the game', () => {
            // Arrange
            const maxRows = 3;
            let emptyBoardSquares = Array(maxRows ** 2).fill(null);
            let sut = new Business(maxRows);

            // Act
            let actual = sut.calculateWinner(emptyBoardSquares);

            // Assert
            expect(actual).toBeNull();
        });

        it('returns no winner at the end of the game', () => {
            // Arrange
            let fullBoardSquares = [
                'X', 'O', 'X',
                'O', 'X', 'X',
                'O', 'X', 'O'
            ];
            let sut = new Business(3);

            // Act
            let actual = sut.calculateWinner(fullBoardSquares);

            // Assert
            expect(actual).toBeNull();
        });

        it('returns winner X! Happy path!', () => {
            // Arrange
            let squares = [
                'X', 'X', 'X',
                'O', 'O', null,
                null, null, null
            ];
            let sut = new Business(3);

            // Act
            let actual = sut.calculateWinner(squares);

            // Assert
            expect(actual).toEqual('X');
        });

        const printSquare = (square) => {
            if (!Array.isArray(square)) {
                throw new TypeError();
            }
            let max = Math.sqrt(square.length);
            if (max % 1 > 0) {
                throw new RangeError(`${square.length} is bad length of square array!`);
            }
            max = Math.trunc(max);

            const indent = 3;
            let text = "[\n";
            for (let i = 0; i < square.length; i++) {
                if (i % max === 0) {
                    text += ' '.repeat(indent);
                }
                let item = square[i],
                    isStr = (typeof item === 'string' || item instanceof String);
                text += isStr
                    ? `'${item}', `
                    : `${item}, `;
                if (i % max === max - 1) {
                    text += '\n';
                }
            }
            return text.slice(0, -3) + "\n]";
        };

        it('returns winner having filled out a row! Happy path!', () => {
            // Arrange
            const maxRows = 3;
            let winner = 'X';
            let sut = new Business(maxRows);

            for (let row = 0; row < maxRows; row++) {
                let squares = Array(maxRows ** 2)
                    .fill(null)
                    .fill(winner, row * maxRows, row * maxRows + maxRows);

                console.log("squares =", printSquare(squares));

                // Act
                let actual = sut.calculateWinner(squares);

                // Assert
                expect(actual).toEqual(winner);
            }
        });

        it('returns winner having filled out a column! Happy path!', () => {
            // Arrange
            const max = 3;
            let winner = 'X';
            let sut = new Business(max);

            for (let col = 0; col < max; col++) {
                let squares = Array(max ** 2)
                    .fill(null);
                for (let i = 0; i < max; i++) {
                    squares[i * max + col] = winner;
                }

                console.log("squares =", printSquare(squares));

                // Act
                let actual = sut.calculateWinner(squares);

                // Assert
                expect(actual).toEqual(winner);
            }
        });

        describe('returns winner having filled out a diagonal! Happy path!', () => {
            // Setup
            const max = 3;
            let winner = 'X';
            let sut = new Business(max);

            const diagonals = [
                {
                    name: 'main diagonal',
                    indexer: (max, row) => row * max + row,
                },
                {
                    name: 'anti-diagonal',
                    indexer: (max, row) => max - row - 1 + row * max,
                },
            ];

            diagonals.forEach((diagonal) => {
                it(`works in case of ${diagonal.name}`, () => {
                    // Arrange
                    let squares = Array(max ** 2)
                        .fill(null);

                    for (var row = 0; row < max; row++) {
                        squares[diagonal.indexer(max, row)] = winner;
                    }
                    console.log("squares =", printSquare(squares));

                    // Act
                    let actual = sut.calculateWinner(squares);

                    // Assert
                    expect(actual).toEqual(winner);
                });
            });
        });
    }); // calculateWinner
});