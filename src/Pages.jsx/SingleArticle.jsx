import ViewSingleArticle from "../Components/ViewSingleArticle"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getArticleById, getCommentById } from "../Utils/Queries"

const SingleArticle = () => { 

    const [singleArticle, setSingleArticle] = useState()
    const [comments, setComments] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => { 
        getArticleById(id)
        .then((res) => { 
            setSingleArticle(res)
            setIsLoading(false)
        })
        .catch((err) => { 
            console.log(err)
        })
    },[])

    useEffect(() => { 
        getCommentById(id)
        .then((res) => { 
            setComments(res)
            setIsLoading(false)
        })
        .catch((err) => { 
            console.log(err)
        })
    },[])

if (isLoading) { 
    return <h1>Loading...</h1>
} 

if(singleArticle && comments) { 
return <> 
    <ViewSingleArticle singleArticle = {singleArticle} comments = {comments}/> 
    </>
}
} 
export default SingleArticle