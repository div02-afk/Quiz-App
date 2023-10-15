import React, { Component, useEffect, useState } from 'react'
import './home.css'

function startQuiz(e){
  e.preventDefault()
  
  // window.localStorage.setItem('numberOfQuestions', numberOfQuestions)
  window.location.href = 'quiz'
}

function Home (){
    let topics = []
    const [name, setName] = useState('')
    // const [numberOfQuestions, setNumberOfQuestions] = useState()
    async function handleSubmit() {
      
      const response = await fetch(`https://the-trivia-api.com/v2/questions`,{
        method: 'GET',
        headers:{
          "Content-Type": "application/json"
        }
      })
      const data = await response.json()
      window.localStorage.setItem('questions', JSON.stringify(data))
      // topics = data.map(i => i.category)
      console.log(data)
      }
      
    
    useEffect(()=>{
    handleSubmit()},[])
    useEffect(()=>{window.localStorage.setItem('name', name)},[name])
    return(<>
      <h1 className='heading text-center' id= "heading" >Ready?</h1>
      <div className='topic'>
          <form className="form form-group" onSubmit={startQuiz}>
            <input type='text' required={true} className="input form-control-lg" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
            <input type='submit'className='submit btn btn-primary' value='Submit' />
          </form>
        </div>
      </>
      )
}
export default Home