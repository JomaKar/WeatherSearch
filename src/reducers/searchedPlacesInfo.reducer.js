import { FETCH_PLACES } from '../actions';


export default function ( state = null , action ) {
	// console.log('from reducer places', 'state', state, action);
	switch( action.type ) {
		case FETCH_PLACES:
			return (!action.payload.hasOwnProperty('error_message') && action.payload['status'] === 'OK') ? action.payload : null;
			break;

		default:
			return state;
	}

}