import React from 'react';

export default function Square(props) {
    return (
        <button
            className={props.selected ? "selected square" : "square"}
            onClick={props.onClick}>
            {props.value}
        </button>
    );
}
