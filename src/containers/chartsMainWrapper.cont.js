import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Sparklines, SparklinesLine } from 'react-sparklines';

import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';


class ChartsMainWrapper extends Component {
	constructor(props) {
		super(props);

		this.state = {
			city: {},
			list: []
		}

		this.renderMappedCitites = this.renderMappedCitites.bind(this);
	}


	renderMappedCitites() {
		const values = Object.entries({
					temp: ['red', 'Kº'],
					pressure: ['#6CC7DF', 'hPa'],
					humidity: ['blue', '%']
				})

		return this.props.cities.map(entity => (
				<tr key={`${entity.city.name}${entity.city.country}`}>
					<td>
						<GoogleMap lat={entity.city.coord.lat} lng={entity.city.coord.lon} mapID={entity.city.id} />
						{`${entity.city.name} : ${entity.city.country}`}
					</td>
					{values.map(val => (
						<td key={`${entity.city.name}${val[0]}`}>
							<Chart data={entity.list.map(itemData => itemData.main[val[0]])} color={val[1][0]} units={val[1][1]} />
						</td>
					))}
				</tr>
			));
	}

	render() {
		return (
			<div className="charsWrapper">
				<div>
					<table className="table table-hover">
						<thead>
							<tr>
								<th>City</th>
								<th>Temperature (Kº)</th>
								<th>Pressure (hPa)</th>
								<th>Humidity (%)</th>
							</tr>
						</thead>
						<tbody>
							{this.renderMappedCitites()}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}


function mapStateToProps ( state ) {
	console.log('from main view', state);
	return {
		cities: state.searchedWeatherInfo
	};
}

export default connect(mapStateToProps)(ChartsMainWrapper);