import React from 'react';
import ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import Game from './Game'
import Square from './Square';

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
        debugger;

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
});