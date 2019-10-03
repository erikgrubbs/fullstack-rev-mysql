import React from 'react';
import ListElement from './ListElement.jsx';

const List = (props) =>
  <div>
    {props.students.map((student, index) => {
      return <ListElement key={index} student={student} />
    })}
  </div>


export default List

// import React from 'react';
// import ListElement from './ListElement.jsx';

// export default class List extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       updateName: '',
//       id: 0
//     }
//     this.updateStudent = this.updateStudent.bind(this);
//     this.changeHandler = this.changeHandler.bind(this)
//   }

//   updateStudent(){
//     axios.put('./api/students', {
//       newName: this.state.updateName,
//       id: this.state.id
//     })
//       .then(() => {
//         this.getStudents()
//       })
//       .catch((err) => {
//         console.error(err)
//       })
//   }

//   changeHandler(e){
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value
//     }, () => console.log(this.state));
//   }

//   render() {
//     return (
//       <div>
//         {this.props.students.map((student, index) => {
//           return <ListElement key={index} student={student} index={index} updatefunc={this.updateStudent} />
//         })}
//       </div>
//     )
//   }
// }
