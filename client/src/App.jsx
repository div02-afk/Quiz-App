import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Quiz from './pages/quiz'
import Home from './pages/home'
import Result from './pages/result'
import LeaderBoard from './pages/leaderboard'
import NavBar from './pages/navbar'
function App() {
  return (
    <>
      <NavBar/>
      <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Home/>}></Route>
      <Route path = "quiz" element = {<Quiz/>}></Route>
      <Route path = "result" element = {<Result/>}></Route>
      <Route path = "leaderboard" element = {<LeaderBoard/>}></Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
