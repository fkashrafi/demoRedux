import React, { Component } from 'react';
import { connect } from 'react-redux';
import { myfunction,userInput } from '../actions/hellowAction'


class Hellow extends Component {
    componentWillMount(){
        this.props.myfunction();
    }
  render() {
    return (
      <div>
        <hr/>
        <p>It is a Hellow Component</p>
        <h1>Hellow</h1>
        {this.props.name}
        <input type='text' size={50} onChange={(e)=>{this.props.userInput(e.target.value)}} /> 
        <h1>{this.props.userName}</h1>     
      </div>
    );
  }
}
const mapStateToProps = ({ hellow }) => {
    const { name,userName } = hellow;  // student reducer index
    return { name,userName };
  }

export default connect(mapStateToProps,{
  myfunction,userInput})(Hellow);