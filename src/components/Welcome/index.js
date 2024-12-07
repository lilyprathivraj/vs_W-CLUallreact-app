/*const Welcome = ()=>{
    return(
        <h1>Hello, User!</h1>
    )
}*/

import { Component } from "react";

class Welcome extends Component {
	render() {
		const { name, greeting } = this.props;
		return (
			<h1>
				{greeting} {name}!
			</h1>
		);
	}
}

Welcome.defaultProps = {
	name: "lily",
	greeting: "Hello",
};

export default Welcome;
