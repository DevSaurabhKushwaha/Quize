import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Result = () => {
    const location = useLocation()
    const navigate = useNavigate()
     const {name , score}= location.state || {}
     const totalQuestion = 10



     const getGrade = (score)=>{
        const percentage = (score/totalQuestion)*100
        if(percentage >= 90 ) return "A"
        if(percentage >= 70 ) return "B"

        if(percentage >= 50 ) return "C"
        return "D"

     }
  return (
    <>
       <div>
        <h1> Quize Result</h1>
        <p>name:{name}</p>
        <p>score:{score} / { totalQuestion}</p>
        <p>Grade: {getGrade(score)}</p>
        <button onClick={()=> navigate("/")}>Try again</button>
       </div>
    </>
  )
}

export default Result
