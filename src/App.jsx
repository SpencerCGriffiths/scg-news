import { useState, useEffect} from 'react'
import axios from "axios"
import './App.css'
import Header from './Components/Header'
import NavWrapper from './Components/NavWrapper'
import ContentWrapper from './Components/ContentWrapper'
import BottomButtons from './Components/BottomButtons'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getArticles } from './Utils/Queries'
import SingleArticle from './temporary/SingleArticle'


function App() {
const[isLoading, setIsLoading] = useState(true)

const[articles, setArticles] = useState([])
  


  useEffect(() => { 
    getArticles()
    .then((res) => { 
      setArticles(res)
      setIsLoading(false)
    })
  }, [])



if (isLoading) { 
  return <>
  <h2>Loading...</h2>
  </>
} else { 

return (
<BrowserRouter> 
    <Header /> 
    <NavWrapper />
    <Routes>  
    <Route path="/" element= {<ContentWrapper articles = { articles }/>} /> 
    <Route path="/:id" element ={<SingleArticle />}/>
    </Routes>
    <BottomButtons /> 
</BrowserRouter>
  )
}
}
export default App
