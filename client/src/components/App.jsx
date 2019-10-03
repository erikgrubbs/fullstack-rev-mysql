import React from 'react';
import axios from 'axios';
import List from './List.jsx';
import Add from './Add.jsx';
import Random from './Random.jsx';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'page': 'home',
      'studentlist' : []
    }
    this.getStudents = this.getStudents.bind(this);
    this.changepage = this.changepage.bind(this)
  }

  componentDidMount(){
    this.getStudents()
  }

  getStudents(){
    axios.get('/api/students')
      .then((data) => {
        this.setState({
          'studentlist': data.data
        }, () => {
          console.log(this.state)
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  changepage(e){
    if (e.target.value === 'home'){
      this.getStudents()
    }
    this.setState({
      'page': e.target.value
    }, () => console.log(this.state))
  }

  render() {
    if (this.state.page === 'add'){
      return (
        <div>
          <Add />
          <button value='home' onClick={(e) => this.changepage(e)}>Back</button>
        </div>
      )
    } else if (this.state.page === 'list'){
      return (
        <div>
          <List students={this.state.studentlist} />
          <button value='home' onClick={(e) => this.changepage(e)}>Back</button>
        </div>
      )
    } else if (this.state.page === 'random'){
      return (
        <div>
          <Random students={this.state.studentlist} />
          <button value='home' onClick={(e) => this.changepage(e)}>Back</button>
        </div>
      )
    } else {
      return (
        <div>
          <button value='add' onClick={(e) => this.changepage(e)}>Add Student</button>
          <button value='list' onClick={(e) => this.changepage(e)}>List Students</button>
          <button value='random' onClick={(e) => this.changepage(e)}>Random Student</button>
        </div>
      )
    }
  }
}