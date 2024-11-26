import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './component/pages/home/Home'
import Quize from './component/pages/quiz/Quize'
import Result from './component/pages/result/Result'

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Quize' element={<Quize />} />
          <Route path='/Result' element={<Result />} />
        </Routes>
    </>
  )
}

export default App
