const FETCH_WEATHER = 'FETCH_WEATHER',
		API_KEY 	= '961d74f53989292df92a4a538e2b5a1c',
		URL_BASE	= 'http://api.openweathermap.org/data/2.5/forecast?';

const searchingWeatherInfoActionCreator = function ( searchedPlace ) {
	// console.log(`${URL_BASE}q=${searchedWord},us&mode=json&APPID=${API_KEY}`);

	return fetch(`${URL_BASE}lat=${searchedPlace.lat}&lon=${searchedPlace.lng}&mode=json&APPID=${API_KEY}`)
		    .then((response) => {
		    	if(response.status !== 200){
		    		alert('Ciudad no encontrada');
		    	}
		    	return response.json()
		    })
		    .then((responseJson) => {
		    	// console.log(responseJson);
				return {
					type: FETCH_WEATHER,
					payload: responseJson
				};
		    })
		    .catch((error) => {
		      console.error('error', error);
		      	return {
					type: FETCH_WEATHER,
					payload: 'nothing'
				};
		    });
}

export { searchingWeatherInfoActionCreator, FETCH_WEATHER };