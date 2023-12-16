import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import Button from '@mui/material/Button';
    <Button variant="text">Text</Button>


const FilterButton = (props) => { 

  const [sort, setSort] = useState('')
  const [order, setOrder] = useState('')

  const {setSort_by, setOrder_by, sort_by, order_by} = props 

  const handleSort = (event) => {
    setSort(event.target.value);
  };
  const handleOrder = (event) => {
    setOrder(event.target.value);
  };

  const handleReset = () => { 
    setOrder_by("desc")
    setSort_by("created_at")
  }

  const handleClick = () => { 
    setSort_by(sort);
    setOrder_by(order);
  };

  const sortformatting = (sort_by) => { 

    let onScreenSort; 

    switch (sort_by) { 
      case "comment_count":
        onScreenSort = "comments";
        break;
      case "votes":
        onScreenSort = "votes";
        break;
      case "created_at":
        onScreenSort = "date";
        break;
        default: 
        onScreenSort = "date";
    }
    return onScreenSort
  
  }

  const orderformatting = (order_by) =>{ 
    let onScreenOrder; 

    switch (order_by) { 
      case "asc":
        onScreenOrder = "ascending";
        break;
      case "desc":
        onScreenOrder = "descending";
        break;
        default: 
        onScreenOrder = "descending";
    }
    return onScreenOrder

  }

  const FilteringBy = () => { 
    
    if (sortformatting(sort_by) === "date" && orderformatting(order_by) === "descending") { 
      return (
        <span>
          filtering by default: {sortformatting(sort_by)} {orderformatting(order_by)}
      </span>
    )
    } else {
      return (
      <span>
        filtering by: {sortformatting(sort_by)} {orderformatting(order_by)}
      </span>
      )
    }
  }
  return (
    <Box sx={{ minWidth: "100vw" }}>
      <FormControl >
        <InputLabel id="sortFieldLabel">Sort by</InputLabel>
        <Select
          labelId="sortFieldLabel"
          id="sortField"
          value={sort}
          label="sort"
          onChange={handleSort}
          sx={{ width: "31vw", height: "5vh"}}
        >
          <MenuItem value={"comment_count"}>comments</MenuItem>
          <MenuItem value={"votes"}>Votes</MenuItem>
          <MenuItem value={"created_at"}>Date</MenuItem>
        </Select>
      </FormControl>
      <FormControl >
        <InputLabel id="orderField">Order by</InputLabel>
        <Select
          labelId="orderField"
          id="orderField"
          value={order}
          label= {order_by}
          onChange={handleOrder}
          sx={{ width: "31vw", height: "5vh"}}
          >
          <MenuItem value={"asc"}>Ascending</MenuItem>
          <MenuItem value={"desc"}>Descending</MenuItem>
          </Select>
      </FormControl>
      <Button variant="contained" onClick={handleClick}  sx={{ width: "17vw", height: "5vh"}}> Set <br /> Filter </Button>
      <Button variant="contained" onClick={handleReset} sx={{ width: "17vw", height: "5vh"}}> Reset <br /> Filter</Button>
      <FilteringBy /> 
    </Box>
  );
}

export default FilterButton