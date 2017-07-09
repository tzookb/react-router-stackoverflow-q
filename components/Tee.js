import React from 'react';
import {
	Link
} from 'react-router-dom';

const Tee = props => {
	return (
		<div>
			Tee
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/tee">Tee</Link></li>
			</ul>
		</div>
	);
};

export default Tee;