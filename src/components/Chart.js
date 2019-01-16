import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const average = (data) => {

	return `Average: ${Math.round(data.reduce((total, sum) => total + sum, 0) / data.length)}`;
}

export default (props) => (
		<div>
			<Sparklines data={props.data} height={120} width={180}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>
				{average(props.data)} {props.units}
			</div>
		</div>
	);