import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import Radio from './RadioForm';

const types = {
	twitter: 'twitter',
	article: 'article',
	note: 'note',
}

const descriptions = {
	twitter: 'favorite Twitter account',
	article: 'Article',
	note: 'Note',
}
class Form extends React.Component {
	state = {
		type: types.twitter,
		title: "",
		link: "",
		image: "",
		description: "",
	}

	handleRadioButtonChange = (type) => {
		this.setState({
			type: type,
		})
	}

	render() {
		const { type } = this.state;

		return (
			<div className={styles.wrapper}>
				<Title>Add new {descriptions[type]}</Title>
				<form
					autoComplete="off"
					className={styles.form}
					onSubmit={this.props.submitFn}>
					<Radio
						id={types.twitter}
						checked={type === types.twitter}
						changeFn={() => this.handleRadioButtonChange(types.twitter)}
					>
						Twitter
					</Radio>
					<Radio
						id={types.article}
						checked={type === types.article}
						changeFn={() => this.handleRadioButtonChange(types.article)}
					>
						Article
					</Radio>
					<Radio
						id={types.note}
						checked={type === types.note}
						changeFn={() => this.handleRadioButtonChange(types.note)}
					>
						Note
					</Radio>
					<Input
						name="name"
						label="Name"
						maxLength={30}
					/>
					<Input
						name="link"
						label="Twitter Link"
					/>
					<Input
						name="image"
						label="Image"
					/>
					<Input
						tag="textarea"
						name="description"
						label="Description"
					/>
					<Button>add new item</Button>
				</form>
			</div >
		);
	}
}



export default Form;