import {useState, useEffect} from "react"
import { getArticleByTopic, getArticles } from "../Utils/Queries"
import ArticleCard from "../Components/ArticleCard"
import { useParams } from "react-router-dom"
import FilterButton from "../Components/FilterButton"


const ViewAll = () => {

    const {topic} = useParams()
    const[articles, setArticles] = useState([])
    const[isLoading, setIsLoading] = useState(true)
    const[sort_by, setSort_by] = useState("")
    const[order_by, setOrder_by] = useState("")

// console.log(sort_by, "sort")
// console.log(order_by, "order")
// console.log(topic, "topic")
// console.log(articles, "articles")
// console.log(isLoading, "loading")

useEffect(()=> { 
        setIsLoading(true)
        getArticles(topic, sort_by, order_by)
        .then((res)=> { 
            setArticles(res)
            setIsLoading(false)
        })
    }, [topic, sort_by, order_by])
    

if (isLoading) { 
return   <div style={{ paddingTop: '50vh', textAlign: 'center' }}>
<h2>Loading...</h2>
</div>
    } 

if (articles) { 
    return ( 
        <div id = "artHeader">
        <h1 > Welcome to SCG NEWS</h1>
        <FilterButton setSort_by = { setSort_by} setOrder_by = { setOrder_by } />
     {articles.map((article) => {
        return <ArticleCard  article = {article}  setArticles = {setArticles} key = {article.article_id} /> }) } 
        </div>
    )
    }
}

export default ViewAll

