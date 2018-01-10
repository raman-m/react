import React from 'react'
import {connect} from 'react-redux'
import * as actionCreators from './actions'

const Counter = ({inc, dec, reset, value}) => (
  <div>
    <div>{value}</div>
    <div>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={reset}>R</button>
    </div>
  </div>
)

const mapStateToProps = state => ({
  value: state.counter.value
})

export const ConnectedCounter = connect(mapStateToProps, actionCreators)(Counter)