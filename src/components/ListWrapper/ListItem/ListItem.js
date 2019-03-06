import React from 'react';
import './ListItem.css';
import danAbramovImage from '../../../assets/images/danabramov.jpg';

const ListItem = () => (
	<li className="listItemWrapper">
		<img src={danAbramovImage} />
		<div>
			<h2>Dan Abramov</h2>
			<p>Working on @reactjs. The demo guy.</p>
			<button>visit twitter page</button>
		</div>
	</li>
);

export default ListItem;