import ArtHeader from "../Components/ArtHeader"
import {useState, useEffect} from "react"
import { getArticleByTopic, getArticles } from "../Utils/Queries"
import ArticleCard from "../Components/ArticleCard"
import { useParams } from "react-router-dom"


const ViewAll = () => {

    const {topic} = useParams()

    const[articles, setArticles] = useState([])
    const[isLoading, setIsLoading] = useState(true)


useEffect(()=> { 
        setIsLoading(true)
        getArticles(topic)
        .then((res)=> { 
            setArticles(res)
            setIsLoading(false)
        })
    }, [topic])
    

if (isLoading) { 
return   <div style={{ paddingTop: '50vh', textAlign: 'center' }}>
<h2>Loading...</h2>
</div>
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