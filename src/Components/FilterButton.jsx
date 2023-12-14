import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

const FilterButton = (props) => { 

  const [sort, setSort] = useState('')
  const [order, setOrder] = useState('')

  const {setSort_by, setOrder_by} = props 

  const handleSort = (event) => {
    setSort_by(event.target.value);
  };
  const handleOrder = (event) => {
    setOrder_by(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Age"
          onChange={handleSort}
        >
          <MenuItem value={"title"}>Title</MenuItem>
          <MenuItem value={"topic"}>Topic</MenuItem>
          <MenuItem value={"author"}>Author</MenuItem>
          <MenuItem value={"votes"}>Votes</MenuItem>
          <MenuItem value={"comment_count"}>Comments</MenuItem>
          <MenuItem value={"created_at"}>Date</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Order by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={order}
          label="Age"
          onChange={handleOrder}
        >
          <MenuItem value={"asc"}>Ascending</MenuItem>
          <MenuItem value={"desc"}>Descending</MenuItem>
          </Select>
      </FormControl>
    </Box>
  );
}

export default FilterButton