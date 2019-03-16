import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => (
	<ul>
		<li><Link to="/notes">Notes</Link></li>
		<li><Link to="/">Twitters</Link></li>
		<li><Link to="/articles">Articles</Link></li>
	</ul>
);

export default Navigation;