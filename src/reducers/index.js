import { combineReducers } from 'redux';

import searchedPlacesInfo from './searchedPlacesInfo.reducer';
import searchedWeatherInfo from './searchedWeatherInfo.reducer';

const rootReducer = combineReducers({
  searchedWeatherInfo: searchedWeatherInfo,
  searchedPlacesInfo: searchedPlacesInfo
});

export default rootReducer;
