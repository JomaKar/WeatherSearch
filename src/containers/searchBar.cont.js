import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SearchResultsList from './searchResultsList.cont';

import { searchingActionCreator } from '../actions';


class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: ''
		};

		this.onInputting = this.onInputting.bind(this);
		this.onSearching = this.onSearching.bind(this);
	}

	onInputting(ev) {
		this.setState({text: ev.target.value});
	}

	onSearching(ev) {
		if(ev) ev.preventDefault();
		this.props.searchPlace(this.state.text);
		this.setState({text: ''});
	}

	render() {
		return (
			<div className="search-bar-wrapper">
				<form className="search-bar-form input-group" onSubmit={this.onSearching} >
					<input className="form-control" value={this.state.text} onInput={this.onInputting} />
					<span className="input-group-btn">
						<button className="btn btn-secondary">
							<FontAwesomeIcon icon="search" />
						</button>
					</span>
				</form>
				<SearchResultsList />
			</div>
		)
	}
}


function mapDispatchToProps ( dispatch ) {
	return bindActionCreators( { searchPlace: searchingActionCreator }, dispatch );
}

export default connect(null, mapDispatchToProps)(SearchBar);