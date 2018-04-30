import React from 'react';

class StorePicker extends React.Component {
	//must have a render method
	render(){
		//return some jsx to render
		//return <p>Hello</p>
		return(
			//can only ever return 1 element
			<form className="store-selector">
				{/*comment*/}
				<h2>Please enter a store</h2>
				<input type="text" required placeholder="Store Name" />
				<button type="submit">Visit Store </button>
			</form>
		)
	}
}

export default StorePicker;

//is legit:
return (
    <React.Fragment>
        <p>is ok</p>
        <form className="store-selector">
            <h2>Please enter a store</h2>
            <input type="text" required placeholder="Store Name" />
            <button type="submit">Visit Store </button>
        </form>

    </React.Fragment>
)

comments MUST be inside the returned Element.






