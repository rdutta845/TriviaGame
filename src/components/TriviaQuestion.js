import React, {Component} from 'react';
export default class Questions extends Component{
    render(){
        // console.log(this.props)
        return(<div className='que-block'>
                <h1>{this.props.quesInfo.category}(<span>{this.props.quesInfo.type} {this.props.quesInfo.difficulty})</span></h1>
                <p className="ques">Question {this.props.qindex}: {this.props.quesInfo.question}</p>
                <p><input type='radio' name={'q'+this.props.qindex} id={'q'+this.props.qindex+'c'} onChange={() => this.props.checkAnsw(1, this.props.qindex)}/><label htmlFor={'q'+this.props.qindex+'c'}>Option 1: {this.props.quesInfo.correct_answer}</label></p>
                {this.props.quesInfo.incorrect_answers.map((val, index)=> <p key={index}><input type='radio' name={'q'+this.props.qindex} id={'q'+this.props.qindex+index} onChange={() => this.props.checkAnsw(0, this.props.qindex)}/><label htmlFor={'q'+this.props.qindex+index}>{"Option "+(index+2) + ":  " +val}</label></p>)}
            </div>)
    }
}