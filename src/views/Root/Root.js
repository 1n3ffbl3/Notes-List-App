import React from 'react';
import './index.css';

const initialStateItems = [
	{
		image: "https://pbs.twimg.com/profile_images/906557353549598720/oapgW_Fp.jpg",
		name: 'Dan Abramov',
		description: 'Working on @reactjs. The demo guy.',
		twitterLink: 'https://twitter.com/dan_abramov',
	}
]
class Root extends React.Component {
	state = {
		items: [...initialStateItems],
	};

	addItem = event => {
		event.preventDefault();

		const newItem = {
			name: event.target[0].value,
			twitterLink: event.target[1].value,
			image: event.target[2].value,
			description: event.target[3].value,
		};

		this.setState(prevState => ({
			items: [...prevState.items, newItem],
		}));

		event.target.reset();
	};

	render() {
		return (
			<>
				<h1>Hello world</h1>
			</>

		);
	}
}


export default Root;