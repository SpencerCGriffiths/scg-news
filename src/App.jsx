import { useState, useEffect} from 'react'
import axios from "axios"
import './App.css'
import Header from './Components/Header'
import NavWrapper from './Components/NavWrapper'
import ContentWrapper from './Components/ContentWrapper'
import BottomButtons from './Components/BottomButtons'

function App() {

  const[articles, setArticles] = useState([])

  useEffect(()=> { 
    axios
    .get("https://readaway.onrender.com/api/articles")
    .then((res) => { 
      setArticles(res.data.articles)
    })
    .catch((err) => { 
      console.log(err)
    })
    }, [])

    return (
      <> 
    <Header /> 
    <NavWrapper /> 
    <ContentWrapper articles = { articles } /> 
    <BottomButtons /> 
    </>
  )
}

export default App
