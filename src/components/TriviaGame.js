import React from 'react';
import Questions from './TriviaQuestion';
export const TriviaGame = (props) =>{
        return(
            <React.Fragment>
                {props.quesns.map((val, index)=>
                    <Questions quesInfo={val} key={index} qindex={index+1}/>
                )
                }
                <button>Submit</button>
            </React.Fragment>
        )
    }
