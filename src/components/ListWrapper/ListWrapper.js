import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';
import { twitterAccounts } from '../../data/twitterAccounts';

const ListWrapper = () => (
	<ul className="listWrapper__wrapper">
		{twitterAccounts.map(item => (
			<ListItem {...item} key={item.name} />
		))}
	</ul>
);

export default ListWrapper;