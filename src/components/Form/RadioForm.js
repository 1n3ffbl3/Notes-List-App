import React from 'react';
import styles from './RadioForm.module.scss';

const Radio = ({ id, children, checked, changeFn }) => (
	<label className={styles.radio}>
		<input
			id={id}
			type="radio"
			checked={checked}
			onChange={changeFn}
		/>
		<div className={styles.radioButton} />
		{children}
	</label>
);

export default Radio;
