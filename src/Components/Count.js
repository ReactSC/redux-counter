import React from "react";
import { connect } from "react-redux";

import Control from './control'

const Count = props => {
	return (
		<div>
			<h1>I am Counter</h1>
			<p className="display-4"> { props.count } </p>
      <Control />
		</div>
	);
};

function mapStateToProps(state) {
	return {
		count: state.count
	};
}


export default connect(mapStateToProps)(Count)