import React, {Component} from 'react';
import Questions from './TriviaQuestion';
import { connect } from "react-redux";
class TriviaGame extends Component {
    state ={
        val : 0,
        answrArr : []
    }
    checkAnsw = (bool, ind) => {
        this.state.answrArr[ind] = bool;
        this.state.val = this.state.answrArr.reduce((acc, val) => acc + val, 0);
    }
    submit = () => {
        this.props.addData(this.state.val);
    }
    render(){       
        return(
            <React.Fragment>
                {this.props.quesns.map((val, index)=>
                    <Questions quesInfo={val} key={index} qindex={index+1} checkAnsw={this.checkAnsw}/>
                )
                }
                <button className="submit-btn" onClick={() => this.submit()}>Submit</button>
                <div>Your Score {this.props.point}</div>
            </React.Fragment>
        )
      }

    }
    const mapStateToProps = state => {
        return {
          point: state.point
        };
      };
      
      const mapDispachToProps = dispatch => {
        return {
          addData: (val) =>{ 
              dispatch({ type: "ADD", value: val })
            },
          reset:() => {dispatch({ type: "RESET", value: 0 })},
          getData: () => dispatch({ type: "GET", value: 1 }),
        };
      };
      export default connect(
        mapStateToProps,
        mapDispachToProps
      )(TriviaGame);
      