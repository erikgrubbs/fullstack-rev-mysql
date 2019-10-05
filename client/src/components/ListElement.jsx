import React from 'react';
import axios from 'axios';


class ListElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
      name: this.props.student.name
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.showUpdate = this.showUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  showUpdate() {
    this.setState({
      update: true
    })
  }

  handleSubmit() {
    this.props.sendUpdate(this.props.student.id, this.state.name);
    this.setState({
      update: false
    })
  }


  render() {
 
    return (
      <span>
        {this.state.update ?
          <div>
            <input onChange={this.handleInputChange} value={this.state.name}></input>
            <button onClick={this.handleSubmit}>update</button>
          </div>
          :
          <div onClick={this.showUpdate}>{this.props.student.name}</div>
        }
        <img src={this.props.student.imgurl}></img>
      </span>
    )
  }
}


export default ListElement