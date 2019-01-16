import React, {Component} from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


class GoogleMap extends Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		var place = {lat: this.props.lat, lng: this.props.lng};
		var map = new google.maps.Map(
		document.getElementById(this.props.mapID), {zoom: 4, center: place});
		var marker = new google.maps.Marker({position: place, map: map});
	}

	render(){
		return (<div id={this.props.mapID} className="mapElement" ></div>);
	}
}

export default GoogleMap;