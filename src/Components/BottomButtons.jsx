import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom'
import CategoryDraw from './CategoryDraw'

const BottomButtons = () => { 
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group" className="BottomButtonPane">
<Link to='/'> 
      <Button>Home</Button>
</Link>
      <Button> Post</Button>
      <Button> User</Button>
      <CategoryDraw />
    
    </ButtonGroup>
  );
}

export default BottomButtons