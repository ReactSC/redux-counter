import {add, sub} from '../actions/action-types';

const initialState = {
	count: 0,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {

		case add :
			return {
				count: state.count + 1
			};

		case sub :
			return {
				count: state.count - 1
			};

		default: return state;
	}
}

export default rootReducer;
