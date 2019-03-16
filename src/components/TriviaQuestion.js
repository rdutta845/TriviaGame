import React, {Component} from 'react';
export default class Questions extends Component{
    render(){
        return(<div>
                <h1>{this.props.quesInfo.category}(<span>{this.props.quesInfo.type} {this.props.quesInfo.difficulty})</span></h1>
                <p>Question {this.props.qindex}: {this.props.quesInfo.question}</p>
                <p><input type='radio' name={'q'+this.props.qindex} id={'q'+this.props.qindex+'c'}/><label for={'q'+this.props.qindex+'c'}>Option 1: {this.props.quesInfo.correct_answer}</label></p>
                {this.props.quesInfo.incorrect_answers.map((val, index)=> <p key={index}><input type='radio' name={'q'+this.props.qindex} id={'q'+this.props.qindex+index}/><label for={'q'+this.props.qindex+index}>{"Option "+(index+1) + ": " +val}</label></p>)}
            </div>)
    }
}