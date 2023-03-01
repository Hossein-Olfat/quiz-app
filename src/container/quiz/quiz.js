import './quiz.css';
import {useState} from 'react';
import {Questionanswer} from './questionanswer/questionanswer.js';
function Quiz(){
    const [quiz,setquiz] =useState({
        questions:[{
            question_text:'what is the capital of France?',
            questionanswers:[
                {answer:'new York',iscorrect:false},
                {answer:'London',iscorrect:false},
                {answer:'Paris',iscorrect:true},
                {answer:'Dublin',iscorrect:false},
            ]
                
        },
        {
            question_text:'who is CEO of Tesla?',
            questionanswers:[
                {answer:'jeff Bezos',iscorrect:false},
                {answer:'Elon Musk',iscorrect:true},
                {answer:'Bill Gates',iscorrect:false},
                {answer:'Tony Stark',iscorrect:false},
            ]
        },
        {
            question_text:'the iphone was created by which Company?',
            questionanswers:[
                {answer:'Apple',iscorrect:true},
                {answer:'Intel',iscorrect:false},
                {answer:'Amazon',iscorrect:false},
                {answer:'Microsoft',iscorrect:false},
            ]
        },
        {
            question_text:'How many Harry Potter books are there?',
            questionanswers:[
                {answer:'1',iscorrect:false},
                {answer:'4',iscorrect:false},
                {answer:'6',iscorrect:false},
                {answer:'7',iscorrect:true},
            ]


        }
    ],
        currentquestion:0,
        score:0,
    });
        
    function checkoption(event){
        console.log(event.target.textContent);
        const values_answers_info =quiz.questions[quiz.currentquestion].questionanswers;
       const find_value_chosen = values_answers_info.find((value)=>{
           return value.answer===event.target.textContent;
        });
        setquiz((prev)=>{
               let _score =find_value_chosen.iscorrect ? quiz.score+1 : prev.score;
            return {...quiz,currentquestion:prev.currentquestion+1,score:_score};
           })
        
    }
    
    return (
        <>
            {
                quiz.currentquestion!==4 ?
                           
        <div className='quiz'>
                <div className='box-ask'>
                        {quiz.questions[quiz.currentquestion].question_text}
                </div>
        
                <div className='questionanswer-container'>
                        {quiz.questions[quiz.currentquestion].questionanswers.map((value,index)=>{
                            return <Questionanswer checking={checkoption} number={index+1} answer_content={value.answer} key={value.answer}/>;
                        })}
                </div>

        </div> : <div className='box-score'>you scored {quiz.score} out of 4</div>
                
                
                
            }
        
    </>      
    
    )

}

export {Quiz};