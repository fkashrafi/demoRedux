import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doSubmit,addSubmit,ustad_name, } from '../actions';


class Student extends Component {
  componentWillMount(){
    this.props.ustad_name();
  }
  render() {
    return (
      <div>
      <h1>Student Page</h1>
      <button onClick={this.props.doSubmit}>Click me</button>
      <p>{this.props.name}</p>
      <p>{this.props.age}</p>
      <button onClick={this.props.addSubmit}>Click me</button>
      <p>{this.props.donorName}</p>
      <p>{this.props.nameustad}</p>
      <h3>{this.props.userName}</h3>

      </div>
    );
  }
}

const mapStateToProps = ({ student,hellow }) => {
  const { name,age,donorName,nameustad} = student;  // student reducer index
  const { userName } = hellow;  // student reducer index

  return { name,age,donorName,nameustad,userName };
}

export default connect(mapStateToProps,{
  doSubmit,addSubmit,ustad_name,
})(Student);
