import {Component} from 'react'

class Log extends Component{
    state={isLogedIn:true};

    renderAuthButton = ()=>{
        const {isLogedIn}=this.state
        if(isLogedIn === true){
            console.log("log clicked")
            return <button type='button'>Log Out</button>
        }
        return <button type='button'>Log In</button>
    }

    render(){
        return (
            <div>
                {this.renderAuthButton()}
            </div>
//or variable element:- 
//or ternary:- isLogedIn?<button type="button">Log Out</button>:<button type="button">Log In</button>
 //or logical &&:- {isLogedIn?<button type="button">Log Out</button>}
 //  {!isLogedIn?<button type="button">Log In</button>}

        )
    }
}

export default Log

