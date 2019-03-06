import React from 'react';
import ReactDOM from 'react-dom';
/*
import { App } from './App';  named export forces you to use {} and import exactly the same name of component that was exported
import { App as Baboo, name } from './App'; // but there is also an option to change the name thanks to as
console.log("name:", name); 
 */
import OtherName from './App'; // it's possible to import App component with other name 

ReactDOM.render(

	//< Baboo />, // named export
	< OtherName />,

	document.getElementById('root')
);