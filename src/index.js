import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
	/*In the case that your arrow function has a single expression 
	as the function body, that expression will be executed, 
	and the resulting value will be implicitly returned 
	when the function is called */
	// return (  no need of return
	<div className="wrapper">
		<h1 className="mainHeader"> Hello</ h1>
		<h2 className="secondaryHeader"> yellow</h2>
	</div >
	// )
);

ReactDOM.render(

	< App />, // = App()

	document.getElementById('root')
);