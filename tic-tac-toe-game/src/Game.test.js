import React from 'react';
import ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import Game from './Game'
import Square from './Square';
import Business from './Business'
import { Mock, ArgsMockingResult } from './Mock'

describe('Game component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Game />, div);
    });

    it('"Move Location" feature works', () => {
        // Arrange
        let container = document.createElement('div');
        let state = {
            history: [
                {
                    squares: [null, null, null, null, null, null, null, null, null]
                },
                {
                    squares: ["X", null, null, null, null, null, null, null, null]
                },
                {
                    squares: ["X", null, null, "O", null, null, null, null, null]
                },
                {
                    squares: ["X", "X", null, "O", null, null, null, null, null]
                },
                {
                    squares: ["X", "X", null, "O", "O", null, null, null, null]
                },
                {
                    squares: ["X", "X", "X", "O", "O", null, null, null, null]
                },
            ],
            stepNumber: 5,
            xIsNext: false,
        };
        const expectedButtonText = [
            "Go to game start => (?, ?)",
            "Go to move #1 => (1, 1)",
            "Go to move #2 => (1, 2)",
            "Go to move #3 => (2, 1)",
            "Go to move #4 => (2, 2)",
            "Go to move #5 => (3, 1)",
        ];

        // Act
        TestUtils.act(() => {
            ReactDOM.render(<Game />, container);
        });
        const ol = container.querySelector('ol');
        const buttons = ol.querySelectorAll('button')

        // Assert
        let button = buttons[0];
        let expected = expectedButtonText[0];
        expect(button.textContent).toBe(expected);
    });

    describe('jumpTo', () => {
        let history = [
            {
                squares: [
                    null, null, null,
                    null, null, null,
                    null, null, null
                ]
            },
            {
                squares: [
                    "X", null, null,
                    null, null, null,
                    null, null, null
                ]
            },
            {
                squares: [
                    "X", null, null,
                    null, null, null,
                    null, null, "O"
                ]
            },
            {
                squares: [
                    "X", null, null,
                    "X", null, null,
                    null, null, "O"
                ]
            },
            {
                squares: [
                    "X", null, null,
                    "X", null, "O",
                    null, null, "O"
                ]
            },
            {
                squares: [
                    "X", null, null,
                    "X", null, "O",
                    "X", null, "O"
                ]
            }
        ];

        const mockSetup = {
            makeStepsDiff: (prevSquares, currentSquares) => {
                return mockSetup.mock.object(prevSquares, currentSquares);
            }
        };
        const businessMock = new Mock(mockSetup);
        const diffMockData = [
            Business.noDiff,
            { col: 1, index: 0, row: 1 },
            { col: 3, index: 8, row: 3 },
            { col: 1, index: 3, row: 2 },
            { col: 3, index: 5, row: 2 },
            { col: 1, index: 6, row: 3 }
        ];

        beforeEach(() => {
            businessMock.setup(mockSetup.makeStepsDiff);
        });

        it('gets steps diff and assigns diff index to the state', () => {
            // Arrange
            const sut = new Game({});
            sut.state.history = history;
            sut.business = businessMock;

            history.forEach((step, index) => {
                // Arrange
                let diff = diffMockData[index];
                businessMock.returns(() => diff);

                // Act
                let actual = sut.jumpTo(index);

                // Assert
                expect(businessMock.called).toBe(index + 1);
                expect(actual.squareIndex).toBe(diff.index);
            });
        });

        it('sets new state', () => {
            // Arrange
            const sut = new Game({});
            sut.state.history = history;
            sut.business = businessMock;

            history.forEach((step, index) => {
                // Arrange
                let diff = diffMockData[index];
                businessMock.returns(() => diff);

                // Act
                let actual = sut.jumpTo(index);

                // Assert
                expect(businessMock.called).toBe(index + 1);
                expect(actual.stepNumber).toBe(index);
                expect(actual.squareIndex).toBe(diff.index);
                expect(typeof actual.xIsNext).toEqual('boolean');
            });
        });
    });

    describe('getStepsDiff', () => {
        // Setup
        let businessMock;
        const mockSetup = {
            makeStepsDiff: (prevSquares, currentSquares) => {
                return mockSetup.mock.object(prevSquares, currentSquares);
            }
        };

        beforeEach(() => {
            businessMock = new Mock(mockSetup)
                .setup(mockSetup.makeStepsDiff);
        });

        it('checks arguments', () => {
            // Arrange
            let sut = new Game({});
            let step = { squares: [] };

            // Act, Assert
            expect(sut.getStepsDiff(null)).toEqual(Business.noDiff);
            expect(sut.getStepsDiff({})).toEqual(Business.noDiff);
            expect(sut.getStepsDiff(step)).toEqual(Business.noDiff);

            expect(sut.getStepsDiff(step, null)).toEqual(Business.noDiff);
            expect(sut.getStepsDiff(step, '0')).toEqual(Business.noDiff);
            expect(sut.getStepsDiff(step, -1)).toEqual(Business.noDiff);

            expect(sut.getStepsDiff(step, 0)).toEqual(Business.noDiff);
            expect(sut.getStepsDiff(step, 0, '[]')).toEqual(Business.noDiff);
            expect(sut.getStepsDiff(step, 0, [])).toEqual(Business.noDiff);
        });

        it("reads the 'squares' property", () => {
            // Arrange
            let sut = new Game({});
            sut.business = businessMock
                .returns(() => Business.noDiff)
                .as(ArgsMockingResult);

            const squares = [1, 2, 3];
            const item1 = { squares: squares }

            // Act
            let items = [item1];
            let actual = sut.getStepsDiff(item1, 0, items);

            // Assert
            expect(actual.mock.called).toBe(1);
            expect(actual.args).not.toBeNull();
            expect(actual.args.length).toBe(2);
            expect(actual.args[0]).toEqual(squares);
            expect(actual.args[1]).toEqual(squares);
        });

        it('gets the 1st step as default to read squares from', () => {
            // Arrange
            let sut = new Game({});
            sut.business = businessMock
                .returns(() => Business.noDiff)
                .as(ArgsMockingResult);

            const squares1 = [1, 2, null];
            const squares2 = [1, 2, 3];
            const step1 = { squares: squares1 };
            const step2 = { squares: squares2 };

            // Act
            let steps = [step1, step2];
            let actual = sut.getStepsDiff(step1, 0, steps);

            // Assert
            expect(actual.mock.called).toBe(1);
            expect(actual.args).not.toBeNull();
            expect(actual.args.length).toBe(2);
            expect(actual.args[0]).toEqual(squares1);
            expect(actual.args[1]).toEqual(squares1);
        });

        it('gets the previous step as 1st arg and it gets current step as 2nd arg', () => {
            // Arrange
            let sut = new Game({});
            sut.business = businessMock
                .returns(() => ({
                    index: 2,
                    col: 3,
                    row: 1
                }))
                .as(ArgsMockingResult);

            const prevSquares = [1, 2, null];
            const currentSquares = [1, 2, 3];
            const prevStep = { squares: prevSquares };
            const currentStep = { squares: currentSquares };

            // Act
            let steps = [prevStep, currentStep];
            let actual = sut.getStepsDiff(currentStep, 1, steps);

            // Assert
            expect(actual.mock.called).toBe(1);
            expect(actual.args).not.toBeNull();
            expect(actual.args.length).toBe(2);
            expect(actual.args[0]).toEqual(prevSquares);
            expect(actual.args[1]).toEqual(currentSquares);
        });
    });

});