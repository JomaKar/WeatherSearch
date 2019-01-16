import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchingActionCreator } from '../actions';
import { searchingWeatherInfoActionCreator } from '../actions';


class SearchResultsList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			places: [],
			placesLoopCycle: 0,
			nullPlacesLoopCycle: 0
		};

		this.onSelecting = this.onSelecting.bind(this);
		this.renderPossiblePlaces = this.renderPossiblePlaces.bind(this);
	}

	componentDidUpdate() {
		// console.log('cmpDidUpdate', this.props.possiblePlaces, this.state);

		if(this.props.possiblePlaces && this.state.placesLoopCycle < 1){
			// console.log('cmpDidUpdateOK', this.props.possiblePlaces)
			this.setState({
				places: this.props.possiblePlaces.results,
				placesLoopCycle: this.state.placesLoopCycle + 1
			});

		}else if(this.props.possiblePlaces === null && this.state.nullPlacesLoopCycle < 1){
			this.setState({
				places: [], 
				nullPlacesLoopCycle: this.state.nullPlacesLoopCycle + 1,
				placesLoopCycle: 0
			});
		}
	}

	onSelecting(selected) {
		this.props.searchPlace('&%$');
		this.props.selectedPlace(selected.geometry.location);
		this.setState({
			places: [], 
			placesLoopCycle: 0,
			nullPlacesLoopCycle: 0
		});

		// console.log('selected', selected);
		// console.log('selectedAFT', this.state);
	}

	renderPossiblePlaces(){
		return (!this.state.places.length) ? null : this.state.places.map(place => (
					<li key={place.place_id} onClick={ () => this.onSelecting(place)}>
						{place.formatted_address}
					</li>
				)
			);
	}

	render() {
		return (
			<div className="col">
				<ul class="search-list-results">
					{this.renderPossiblePlaces()}
				</ul>
			</div>
		)
	}
}

function mapStateToProps ( state ) {
	return {
		possiblePlaces: state.searchedPlacesInfo
	};
}


function mapDispatchToProps ( dispatch ) {
	return bindActionCreators( { 
		selectedPlace: searchingWeatherInfoActionCreator,
		searchPlace: searchingActionCreator
	}, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsList);

