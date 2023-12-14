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

  const {setSort_by, setOrder_by} = props 

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

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="sortFieldLabel">Sort by</InputLabel>
        <Select
          labelId="sortFieldLabel"
          id="sortField"
          value={sort}
          label="sort"
          onChange={handleSort}
        >
          <MenuItem value={"comment_count"}>comments</MenuItem>
          <MenuItem value={"votes"}>Votes</MenuItem>
          <MenuItem value={"created_at"}>Date</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="orderField">Order by</InputLabel>
        <Select
          labelId="orderField"
          id="orderField"
          value={order}
          label="orderField"
          onChange={handleOrder}
        >
          <MenuItem value={"asc"}>Ascending</MenuItem>
          <MenuItem value={"desc"}>Descending</MenuItem>
          </Select>
      </FormControl>
      <Button variant="text" onClick={handleReset}> Reset</Button>
      <Button variant="text" onClick={handleClick}> Submit</Button>
    </Box>
  );
}

export default FilterButton