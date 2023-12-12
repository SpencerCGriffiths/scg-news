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


function App() {
return (
<BrowserRouter> 
    <Header /> 
    <NavWrapper />
    <Routes>  
    <Route path="/" element= {<ViewAll />} /> 
    <Route path="/articles/:id" element ={<SingleArticle />}/>
    </Routes>
    <BottomButtons /> 
</BrowserRouter>
  )
}

export default App
