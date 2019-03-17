import React, {Component} from 'react';
// import {Hello} from './components/Hello';
import Trivia from './components/Trivia';
import { connect } from "react-redux";
class App extends Component{
    render(){
        return(<Trivia addData={this.props.addData}/>);
    }
}
const mapStateToProps = state => {
  return {
    point: state.point
  };
};

const mapDispachToProps = dispatch => {
  return {
    addData: () => dispatch({ type: "ADD", value: 1 }),
    getData: () => dispatch({ type: "GET", value: 1 }),
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
