import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleByTopic } from "../Utils/Queries"
import ArtHeader from "../Components/ArtHeader"
import ArticleCard from "../Components/ArticleCard"

const ViewByTopic = () =>  { 

    const {topic} = useParams()

    const [articles, setArticles] = useState([])
    const[isLoading, setIsLoading] = useState(true)

    useEffect(()=> { 
        getArticleByTopic(topic)
        .then((res)=> { 
            setArticles(res)
            setIsLoading(false)
        })
    }, [])

if (isLoading) { 
    return <>
        <h2>Loading...</h2>
        </>
    } 
        
if(articles) {
    return (
        <> 
        <ArtHeader /> 
     {articles.map((article) => {
        return <ArticleCard  article = {article}  setArticles = {setArticles} key = {article.article_id} /> }) } 
        </>
    )
    }
}

export default ViewByTopic