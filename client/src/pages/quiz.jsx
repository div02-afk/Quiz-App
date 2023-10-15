import React, { useState } from 'react'
import './home.css'
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function Quiz(){
    const [questions, setQuestions] = useState(0)
    const [score, setScore] = useState(0)

    const data = (JSON.parse(window.localStorage.getItem('questions')))
    // console.log(data)
    const question = data[questions].question.text
    const correct_answer = data[questions].correctAnswer
    const answers = [...data[questions].incorrectAnswers, data[questions].correctAnswer]
    const answerList = shuffle(answers)
    // console.log(answers)
    
    const check = ((answer)=>{
        console.log(answer)
        if(correct_answer === answer){
            // console.log('correct')
            
            // alert('correct')
            setScore(score+1)
        }
        else {
            // console.log('incorrect')

            // alert('incorrect')
        }
        // console.log(questions)
        setQuestions(questions+1)
    })
    if(questions === data.length-1){
        // alert("Quiz Completed")
        console.log(score)
        window.localStorage.setItem('score', score)
        window.location.href = 'result'
    }
    else return(
        <>
            <h1 className='heading'>Quiz</h1>
            <h1 className='heading'>Score :{score}</h1>
            <div className='topic'>
                <h1 className="question text-center">{question}</h1>
                <div className='options'>
                    <button className='option btn' onClick={()=>check(answerList[0])}>{answerList[0]}</button>
                    <button className='option btn' onClick={()=>check(answerList[1])}>{answerList[1]}</button>
                    <button className='option btn' onClick={()=>check(answerList[2])}>{answerList[2]}</button>
                    <button className='option btn' onClick={()=>check(answerList[3])}>{answerList[3]}</button>
                </div>
            </div>
        </>
    )
    // return(<></>)
}

export default Quiz