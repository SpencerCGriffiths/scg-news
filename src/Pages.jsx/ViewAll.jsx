import ArtHeader from "../Components/ArtHeader"
import ViewAllArticles from "../Components/ViewAllArticles"
import {useState, useEffect} from "react"
import { getArticles } from "../Utils/Queries"


const ViewAll = () => {
    const[articles, setArticles] = useState([])
    const[isLoading, setIsLoading] = useState(true)

    console.log(articles)
    
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
    else 
    { 
    return ( 
        <> 
        <ArtHeader /> 
        <ViewAllArticles articles = {articles} setArticles = {setArticles} /> 
        </>
    )
    }
}

export default ViewAll