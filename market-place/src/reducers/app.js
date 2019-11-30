import { Map } from 'immutable';
/*
import {
	GET_IP_ACTION_START,
	GET_IP_ACTION_SUCCESS,
	GET_IP_ACTION_ERROR,
	GET_APP_GEOLOCATION_ACTION_START,
	GET_APP_GEOLOCATION_ACTION_SUCCESS,
	GET_APP_GEOLOCATION_ACTION_ERROR
} from "actions/app";*/
const GET_IP_ACTION_START = true;
const initialState = Map({
  companies:true
});

const actionsMap = {
	[GET_IP_ACTION_START]: (state) => {
		return state.merge(Map({
			ip: {
				ended: false,
				isError: false,
				data: null
			}
		}));
	},
};

export default function reducer(state = initialState, action = {}) {
	const fn = actionsMap[action.type];
	return fn ? fn(state, action) : state;
}