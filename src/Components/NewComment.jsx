import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import { postNewComment } from '../Utils/Queries';
import { useParams } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const NewComment = (props) => { 

  const {currUser }= useContext(UserContext)

  const {id} = useParams() 

    const {setComments} = props

    const [newComment, setNewComment] = useState("") 

    const handleCommentInput = (event) => { 
        let displayComment = event.target.value
        setNewComment(displayComment)
    }


    const submitNewComment = () => { 
      if (newComment.length > 0) { 
        postNewComment(id,currUser, newComment)
        let date = new Date()
        setComments((comments) => {[...comments, { 
          article_id: id,
          author: currUser, 
          body: newComment, 
          comment_id: date, 
          created_at: date, 
          votes: 0
        }]
        }) 
      } else {
        alert("comment cannot be empty")
       }
    }

    return (
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="New comment.."
            multiline
            maxRows={4}
            onChange={handleCommentInput}
          />
          </div> 
          <Button variant="contained" onClick = {submitNewComment}>Submit</Button>
        </Box>
    )
}

export default NewComment



// article_id: 34
// author: "jessjelly"
// body : "Eaque fugiat est veniam ex praesentium et saepe molestias non. Est dolore et sint consequuntur."
// comment_id: 48
// created_at:"2020-03-08T20:02:00.000Z"
// votes: 12


// "examplePost": {
//     "username": "lurker",
//     "body": "This is a test comment"
//     },
//     "exampleResponse": {
//     "comment_id": 19,
//     "body": "This is a test comment",
//     "article_id": 5,
//     "author": "lurker",
//     "votes": 0,
//     "created_at": "expect.any(String)"
//     }

// const submitNewComment = () => { 
//     // setComments(comments => [...comments, newComment])

//     // invoke axios post request
//     // update the array of all comments
// }
