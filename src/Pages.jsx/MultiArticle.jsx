import {useState, useEffect} from "react"
import { getArticleByTopic, getArticles } from "../Utils/Queries"
import ArticleCard from "../Components/ArticleCard"
import { useParams } from "react-router-dom"
import FilterButton from "../Components/FilterButton"
import SearchBar from "../Components/SearchBar"


const ViewAll = () => {

    const {topic} = useParams()
    const[articles, setArticles] = useState([])
    const[isLoading, setIsLoading] = useState(true)
    const[sort_by, setSort_by] = useState("")
    const[order_by, setOrder_by] = useState("")


useEffect(()=> { 
        setIsLoading(true);
        
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
        
        < >
            <section className="main fixedtop">
        <SearchBar />
        {topic ? <h3 id = "topicPageHeader">You are viewing {topic} articles...</h3>: <h1 id = "mainPageHeader"> Welcome to SCG NEWS</h1> }
        <FilterButton setSort_by = { setSort_by} sort_by = {sort_by} setOrder_by = { setOrder_by } order_by = { order_by}/> 
        </section>
        <section className="topSpacing"> 
     {articles.map((article) => {
        return <ArticleCard  article = {article}  setArticles = {setArticles} key = {article.article_id} sx= {{ display: "flex",
        justifyContent: "center", alignItems: "center" }}/> 
        }) 
    } 
    </section>
    </>
    )
    }
}


export default ViewAll

