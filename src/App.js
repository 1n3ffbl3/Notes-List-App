import React from 'react';

/*
export const App = () => ( // named export
	<div className="wrapper">
		<h1 className="mainHeader"> Hello</ h1>
		<h2 className="secondaryHeader"> yellow</h2>
	</div >
);

export const name = "Thomas" // named export
*/


const App = () => ( // default export
	<div className="wrapper">
		<h1 className="mainHeader"> Hello</ h1>
		<h2 className="secondaryHeader"> yellow</h2>
	</div >
);

export default App;

/*
 In JavaScript there are two types of export
 1) named export
 2) default export (only one export like that in the file)
 */