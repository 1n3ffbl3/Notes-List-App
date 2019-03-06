import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';
import { twitterAccounts } from '../../data/twitterAccounts';
const ListWrapper = () => (
	<ul className="listWrapper__wrapper">
		<ListItem />
	</ul>
);

export default ListWrapper;