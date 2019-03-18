import React, {Component} from 'react';
// import {Hello} from './components/Hello';
import Trivia from './components/Trivia';
export default class App extends Component{
    render(){
      console.log("App Props : ",this.props);
        return(<Trivia/>);
    }
}
