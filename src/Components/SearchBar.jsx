import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => { 
    return ( 

<Box
  component="form"
  sx={{ '& :not(style)': { p: 0.6, m: 0 } }}
  noValidate
  autoComplete="off"
  id="searchBar"
>
  <TextField
    id="outlined-basic"
    label="Search here..."
    variant="outlined"
    sx={{
        backgroundColor: "#BBD0DD",
        margin: "0",
        width: "70vw",
        '& input': {
          padding: "8px", // Adjust the padding as needed
        },
        borderRadius: "10px", // Adjust the radius value for the desired roundness
      }}
  />
  <Button variant="contained" sx={{borderRadius: "10px"}}><SearchIcon /></Button>
</Box>
    );
  }
//         <form id= "searchBar"> 
//         <input type="text" placeholder="search" /> 
//         <button> Submit</button> 
//         </form> 
//     )
// }

export default SearchBar