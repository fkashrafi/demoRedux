import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDonor } from '../actions';

class Donor extends Component {
  componentWillMount(){
    this.props.addDonor();
  }

  render() {
    return (
      <div>
        <hr/>
        <p>It is a Donor component</p>
      <h1>{this.props.name}</h1>
      <h1>{this.props.userName}</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ donor,hellow }) => {
  const { name } = donor;  // student reducer index
  const { userName } = hellow;  // student reducer index
  return { name,userName };
}

export default connect(mapStateToProps,{
  addDonor
})(Donor);