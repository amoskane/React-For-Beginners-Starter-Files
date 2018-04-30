// import is ES6 modules
import React from 'react';
//import one method from the package
import { render } from 'react-dom'; //render to html method. could be ios or android or canvas
//import whole package
//import ReactDOM from 'react-dom';

//imports and inserts link tag
import './css/style.css';
//alert("save!")
						//if no realtive path, assumes node_modules
import StorePicker from './components/StorePicker';
import App from './components/App';

//line 4 gives you this method which takes some DOM and the target where you want it..
//render(<p>Heeeyyy</p>, document.querySelector('#main'));

render(<App/>, document.querySelector('#main'));
	//what component,    where? anchor div.
//ReactDOM.render()