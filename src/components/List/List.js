import React from 'react';
import ListItem from './ListItem';
import styles from './List.module.scss';

const ListWrapper = ({ items }) => (
	<>
		{items.length ? (
			<ul className={styles.wrapper}>
				{items.map(item => (
					<ListItem {...item} key={item.title} />
				))}
			</ul>
		) : (
				<h1 className={styles.noItems}>There's nothing here yet, please add some items!</h1>
			)}

	</>
);

export default ListWrapper;