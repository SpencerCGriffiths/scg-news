import ArtHeader from "../Components/ArtHeader"
import ViewAllArticles from "../Components/ViewAllArticles"
import {useState, useEffect} from "react"
import { getArticles } from "../Utils/Queries"
import ArticleCard from "../Components/ArticleCard"


const ViewAll = () => {
    const[articles, setArticles] = useState([])
    const[isLoading, setIsLoading] = useState(true)

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
    } 

if (articles) { 
    return ( 
        <> 
        <ArtHeader /> 
     {articles.map((article) => {
        return <ArticleCard  article = {article}  setArticles = {setArticles} key = {article.article_id} /> }) } 
        </>
    )
    }
}

export default ViewAll