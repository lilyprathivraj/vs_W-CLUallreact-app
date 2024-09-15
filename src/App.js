//import logo from './logo.svg';
import './App.css';
import UserProfile from './components/UserProfile/index';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import Log from './components/Log';
import {Component} from 'react'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
];

class App extends Component{
  state={
    searchInput:"",
    userDetailsList:initialUserDetailsList,
    }

  onChangeSearchInput=(event)=>{
    this.setState({
      searchInput:event.target.value
    })
  }
  deleteUser = (uniqueNo)=>{
    const {userDetailsList}=this.state
    const filteredList = userDetailsList.filter(eachUser => eachUser.uniqueNo!==uniqueNo)
    console.log({filteredList})
    this.setState({
      userDetailsList:filteredList,
    })

  }
    
   render(){
    const {searchInput,userDetailsList} = this.state
    const searchResults = userDetailsList.filter(eachUser => eachUser.name.includes(searchInput))
    return(
      <div className="list-container">
    
        <Counter/>
        <Welcome name = "prithiviraj"/>
        <Log/>
        <h1 className="title">User List</h1>
        <input type='search' value={searchInput} onChange={this.onChangeSearchInput} />
        <ul>
          {
            searchResults.map(eachItem=>(
              <UserProfile userDetails={eachItem} deleteUser={this.deleteUser} key={eachItem.uniqueNo}/>
            )
            )
          }
        </ul>
      </div>
    )
    }
  }



export default App;
