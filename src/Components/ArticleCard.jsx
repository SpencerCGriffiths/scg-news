import { DateConverter } from "../Utils/DateConverter"
import { Link } from 'react-router-dom'
import { updateVotes } from "../Utils/Queries"
import { useContext, useState } from "react"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const ArticleCard = (props) => { 

const { article, setArticles } = props


const handleClick = (article_id, vote) => {
    updatedArticles(article_id, vote);
    updateVotes(article_id, vote);
  };
  
  const updatedArticles = (article_id, vote) => {
    setArticles((prevArticles) => {
      return prevArticles.map((article) => {
        if (article.article_id === article_id) {
          return {
            ...article,
            votes: article.votes + vote,
          };
        }
        return article;
      });
    });
  };

    return (
      <Card sx={{ width: "95vw", marginBottom: "15px", marginTop: "10px", background: "#FFCFD2"}} key = {article.article_id}>

        <Link className="Link" to={`/articles/${article.article_id}`}>
        <CardMedia
          sx={{ height: "15vh" }}
          image={article.article_img_url}
          title={article.title}
        />
        </Link>

        <CardContent>
        <Link className="Link" to={`/articles/${article.article_id}`}>        
          <Typography gutterBottom variant="h5" component="div">
          {article.title}
          </Typography>
          </Link>

          <Typography variant="body2" color="text.secondary">
          <span> written by {article.author} at {DateConverter(article.created_at)} </span>
          <br />
          topic: {article.topic}

          
          </Typography>
        </CardContent>
        <CardActions>
          <span> {article.votes} Yay's</span>
          <Button size="small" onClick={() => { 
             handleClick(article.article_id, 1)}}>Yay</Button>
          <Button size="small" onClick={() => { 
             handleClick(article.article_id, -1)}}>Nay</Button>
            <Link className="Link" to={`/articles/${article.article_id}`} >
            <span> {article.comment_count} comments</span>
            </Link>
        </CardActions>
      </Card>
    );
  }
export default ArticleCard