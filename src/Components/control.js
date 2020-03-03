import React from 'react'
import { connect } from 'react-redux'

import { add, sub } from '../store/actions/action-types';

const Control = props => {
  return (
    <div>
      <button className="btn btn-success px-5" onClick={ () => props.add() }>+ ADD</button>
      <button className="btn btn-danger px-5" onClick={ () => props.sub() }>- SUB</button>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    add: () => dispatch({ type: add }),
    sub: () => dispatch({ type: sub })
  }
}

export default connect(null, mapDispatchToProps)(Control)