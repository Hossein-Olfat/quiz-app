import './questionanswer.css';
function Questionanswer(props){
    
    return (
        <div className='box-answer-container'>
            <div className='box-answer'>

            <span className='number-answer'>{props.number}</span>
                
            <p onClick={(event)=>{props.checking(event)}} className='box-answer-content'>{props.answer_content}</p>
            


            </div>
            
        </div>
    )
}
export {Questionanswer};