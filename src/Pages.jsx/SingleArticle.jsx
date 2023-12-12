import ViewSingleArticle from "../Components/ViewSingleArticle"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getArticleById } from "../Utils/Queries"

const SingleArticle = () => { 

    const [singleArticle, setSingleArticle] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => { 
        getArticleById(id)
        .then((res) => { 
            console.log(res) 
            setSingleArticle(res)
            setIsLoading(false)
        })
        .catch((err) => { 
            console.log(err)
        })
    },[])

if (isLoading) { 
    return <h1>Loading...</h1>
} else { 
return <> 
    <ViewSingleArticle singleArticle = {singleArticle}/> 
    </>
}
} 
export default SingleArticle