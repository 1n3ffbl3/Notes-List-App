import React from 'react';
import ListItem from './ListItem';
import styles from './List.module.scss';

const ListWrapper = (props) => (
	<ul className={styles.wrapper}>
		{props.items.map(item => (
			<ListItem {...item} key={item.name} />
		))}
	</ul>
);

export default ListWrapper;