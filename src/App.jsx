import { useState, useEffect} from 'react'
import axios from "axios"
import './App.css'
import Header from './Components/Header'
import NavWrapper from './Components/NavWrapper'
import ContentWrapper from './Pages.jsx/ViewAll'
import BottomButtons from './Components/BottomButtons'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getArticles } from './Utils/Queries'
import SingleArticle from './Pages.jsx/SingleArticle'
import ViewAll from './Pages.jsx/ViewAll'
import UserContext from './contexts/UserContext'


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
    </Routes>
    <BottomButtons /> 
</BrowserRouter>
</UserContext.Provider> 
  )
}

export default App
