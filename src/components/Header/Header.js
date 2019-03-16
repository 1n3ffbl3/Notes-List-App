import React from 'react';
import Button from '../../components/Button/Button';
import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.scss';

const Header = () => (
	<header className={styles.wrapper}>
		<HeaderNavigation />
		<Button secondary>new item</Button>
	</header>

);

export default Header;