import React from 'react';
import Questions from './TriviaQuestion';
export const TriviaGame = (props) =>{
    console.log(props)
        return(
            <React.Fragment>
                {props.quesns.map((val, index)=>
                    <Questions quesInfo={val} key={index} qindex={index+1}/>
                )
                }
                <button className="submit-btn" onClick={() => props.addData()}>Submit</button>
            </React.Fragment>
        )
    }
