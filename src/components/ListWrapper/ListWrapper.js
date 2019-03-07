import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';

const ListWrapper = (props) => (
	<ul className="listWrapper__wrapper">
		{props.items.map(item => (
			<ListItem {...item} key={item.name} />
		))}
	</ul>
);

export default ListWrapper;