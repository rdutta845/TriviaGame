import React, {Component} from 'react';
import {TriviaGame} from './TriviaGame';
export default class Trivia extends Component{
    state={
        results: [],
        isLoading:false
    }
    componentWillMount(){
        console.log("no api");
    }
    componentDidMount(){
        this.setState({isLoading:true});
        fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
        .then((resp) => resp.json())
        .then(data=>{
            console.log(data);
            this.setState({results: data.results, isLoading:false});
        })
    }
    render(){
        return(<div>
            {this.state.isLoading? "Loading..." : <TriviaGame quesns={this.state.results}/>}
            </div>)
    }
}