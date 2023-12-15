import { useState, useEffect} from 'react'
import axios from "axios"
import './App.css'
import Header from './Components/Header'
import NavWrapper from './Components/NavWrapper'
import BottomButtons from './Components/BottomButtons'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleArticle from './Pages.jsx/SingleArticle'
import ViewAll from './Pages.jsx/ViewAll'
import UserContext from './contexts/UserContext'
import Error from './Components/Error'


function App() {
  const [currUser, setCurrUser] = useState("grumpy19")
return (
  <UserContext.Provider value={{ currUser, setCurrUser}} >
<BrowserRouter> 
    <Header /> 
    <NavWrapper />
    <Routes>  
    <Route path="/" element= {<ViewAll />} /> 
    <Route path="/articles/topic/:topic" element ={<ViewAll />} /> 
    <Route path="/articles/:id" element ={<SingleArticle />}/>
    <Route path="*" element ={<Error message = "page not found" />} /> 
    </Routes>
    <BottomButtons /> 
</BrowserRouter>
</UserContext.Provider> 
  )
}

export default App
