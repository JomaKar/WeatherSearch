const FETCH_PLACES  = 'FETCH_PLACES',
		API_KEY 	= 'AIzaSyBkaj4_fc5z-xBn08qLk8wFK33FkojZXic',
		URL_BASE	= 'https://maps.googleapis.com/maps/api/geocode/json?';

const searchingActionCreator = function ( searchedPlace ) {
	console.log('searchedPlace action', searchedPlace);

	return fetch(`${URL_BASE}address=${searchedPlace}&key=${API_KEY}`)
		    .then((response) => {
		    	// console.log('googleapis res', response);
		    	return response.json()
		    })
		    .then((responseJson) => {
		    	// console.log('responseJson', responseJson);
				return {
					type: FETCH_PLACES,
					payload: responseJson
				};
		    })
		    .catch((error) => {
		      console.error('error', error);
		      	return {
					type: FETCH_PLACES,
					payload: null
				};
		    });
}

export { searchingActionCreator, FETCH_PLACES };