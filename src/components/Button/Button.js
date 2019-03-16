import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, href, secondary }) => {

	const buttonClass = secondary ? styles.secondary : styles.button;
	return (
		<>
			{
				href ? (
					<a
						href={href}
						target="_blank"
						className={buttonClass}
						rel="noopener noreferrer"
					>
						{children}
					</a>
				) : (
						<button className={buttonClass}>
							{children}
						</button>
					)

			}
		</>
	)
};

Button.propTypes = {
	href: PropTypes.string,
	secondary: PropTypes.string,
};

Button.defaultProps = {
	href: null,
	secondary: null,
};

export default Button;