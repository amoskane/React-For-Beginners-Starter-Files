
///////////////////#3 WRITING OUR FIRST COMPONENT
// import is just ES6 modules
import React from 'react';
//import one method from the package
import { render } from 'react-dom'; //render to html method. could be ios or android or canvas
//or import whole package
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




///////////////////////#4 WRITING HTML WITH JSX
//old way:
return "<p>" + varname + ""...

//es6 template strings:
return '<p>${hello}';

//jsx, alternate to creating elements
return React.createElement('p', {className: 'Testing'}, 'I love you');
						  //tag, includes, content


return <p>hello</p>
is ok unless you go to multiple lines, then you get
return;

so you go
return()

///////////////////////////////#5 loading in css
3 ways:
-put a link tag in the head:
/*<head>
	<link rel="stylesheet" href="style.css">
</head>*/

-import in only the css that applies to that component:

-import the css into the index file which will apply everywhere
import'./css/style.css';



//////////////////////////////#6 app layout with components
