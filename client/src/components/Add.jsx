import React from 'react';
import axios from 'axios';

export default class Add extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'name': '',
      'imgurl': ''
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  changeHandler(e){
    const { name, value } = e.target;
    this.setState({
      [name]: value
    }, () => console.log(this.state));
  }

  handleSubmit(e){
    e.preventDefault();
    axios.post('/api/students',{
      'name': this.state.name
      })
    .then(() => {
      axios.post('/api/images',{
        'imgurl': this.state.imgurl
        })
      .then(() => {
        window.alert('Added student')
      })
      .catch((err) => {
        console.error(err)
      })
    })
    .catch((err) => {
        console.error(err)
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Student Name: </label>
          <input type="text" name="name" onChange={(e) => this.changeHandler(e)} />
          <label>Image URL: </label>
          <input type="text" name="imgurl" onChange={(e) => this.changeHandler(e)} />
          <button type="submit" value="Submit" onClick={(e) => this.handleSubmit(e)}>Submit</button>
        </form>
      </div>
    )
  }
}