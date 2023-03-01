import './quiz.css';
import {Questionanswer} from './questionanswer/questionanswer.js';
function Quiz(){
    return (
        <div className='quiz'>
            <div className='quiz-ask'>
                
            </div>
            <div className='questionanswer-container'>

            <Questionanswer/>
            <Questionanswer/>
            <Questionanswer/>
            <Questionanswer/>
            
            </div>

        </div>
    )
}

export {Quiz};