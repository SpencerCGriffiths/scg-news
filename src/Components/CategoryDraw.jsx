import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { getTopics } from '../Utils/Queries';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CategoryDraw = () => {

    const [topics, setTopics] = useState([])

        useEffect(() => { 
        getTopics()
            .then((res) => { 
            setTopics(res)
            })
        }, [])
        
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {topics.map((topic) => { 
         return <ListItem key={topic.slug} disablePadding>
            <Link className="link" to={`/articles/topic/${topic.slug}`}> 
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={topic.slug} />
            </ListItemButton>
          </Link>
          </ListItem>
    })}
    </List>
      <Divider />
      <List>
      <ListItem key="category" disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="category" />
            </ListItemButton>
          </ListItem>
      </List>
      </Box>
  );

  return ( 
        <React.Fragment key='category'>
          <Button onClick={toggleDrawer('right', true)}>category</Button>
          <SwipeableDrawer
            anchor="right"
            open={state.right}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
          >
           {list("right")}
          </SwipeableDrawer>
        </React.Fragment>
  );
}

export default CategoryDraw