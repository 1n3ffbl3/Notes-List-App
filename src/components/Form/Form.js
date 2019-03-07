import React from 'react';
import './Form.css';

const Form = ({ submitFn }) => (
	<div className="form__wrapper">
		<h2>Add new twitter account</h2>
		<form
			onSubmit={submitFn}
			className="form__form"
		>
			<div className="form__item">
				<input
					placeholder=""
					name="name"
					id="name"
					maxLength="30"
				/>
				<label htmlFor="name">Name</label>
				<div className="forms__item__bar"></div>
			</div>
			<div className="form__item">
				<input
					placeholder=""
					name="link"
					id="link"
				/>
				<label htmlFor="link">Link</label>
				<div className="forms__item__bar"></div>
			</div>
			<div className="form__item">
				<input
					placeholder=""
					name="image"
					id="link"
				/>
				<label htmlFor="image">Image</label>
				<div className="forms__item__bar"></div>
			</div>
			<div className="form__item">
				<textarea
					placeholder=""
					name="description"
					id="description"
				/>
				<label htmlFor="description">Description</label>
				<div className="forms__item__bar"></div>
			</div>
			<button
				type="submit"
				className="form__button"
			>
				add new item
			</button>
		</form >
	</div>
);

export default Form;