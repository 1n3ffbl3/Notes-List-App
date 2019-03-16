import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import TwittersView from '../TwittersView/TwittersView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';

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
		isModalOpen: true,
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

	openModal = () => {
		this.setState({
			isModalOpen: true,
		})
	}

	closeModal = () => {
		this.setState({
			isModalOpen: false,
		})
	}

	render() {
		const { isModalOpen } = this.state;

		return (
			<BrowserRouter>
				<>
					<Header openModalFn={this.openModal} />
					<Switch>
						<Route exact path="/" component={TwittersView} />
						<Route path="/articles" component={ArticlesView} />
						<Route path="/notes" component={NotesView} />
					</Switch>
					{isModalOpen && <Modal closeModalFn={this.closeModal} />}

				</>
			</BrowserRouter>

		);
	}
}


export default Root;