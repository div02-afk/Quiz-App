import React, { useEffect, useState } from 'react'

function Result(){
    let score = window.localStorage.getItem('score')
   
    score = Math.max(score,0)
    async function saveScore(){
        const name = window.localStorage.getItem('name')
        console.log(name)
        
        const response = await fetch('http://localhost:4000/api/saveScore',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:name,
                score:score
            })
        })
        const result = await response.json()
        console.log(result)
    }
    useEffect(()=>{saveScore()},[])
    return(
        <>
            <h1 className="heading text-center">Result</h1>
            <div className='topic'>
               <h2 className='text-center'>You scored {score} points</h2>
               <button className='btn' onClick={()=>window.location.href = '/'}>Play Again</button>
            </div>
        </>
    )
}

export default Result