import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import { postNewComment } from '../Utils/Queries';
import { useParams } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const NewComment = (props) => { 

    const { currUser }= useContext(UserContext)
    const {id} = useParams() 
    const {setComments} = props
    const [newComment, setNewComment] = useState("") 

    const handleCommentInput = (event) => { 
        let displayComment = event.target.value
        setNewComment(displayComment)
    }

    const submitNewComment = () => { 
      if (newComment.length > 0) { 
        let date = new Date()
       setComments((comments) => {
        return [ { 
          article_id: id,
          author: currUser, 
          body: newComment, 
          created_at: date, 
          votes: 0
        }, ...comments]
        }) 
        postNewComment(id,currUser, newComment)
        .then((res) => { 
          console.log(res)
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
