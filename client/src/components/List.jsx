import React from 'react';
import ListElement from './ListElement.jsx';

const List = (props) =>
  <div>
    {props.students.map((student, index) => {
      return <ListElement sendUpdate={props.update} key={index} student={student} />
    })}
  </div>


export default List
