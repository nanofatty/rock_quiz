// Menu.js is a file that aims to essentially create a dropdown list. 
// This is currently still experimental, idea is to have dropdown options
// These Dropdowns items would be mapped to the appropriate information they need to provide
// Might use Modal instead or along with Modal
// Currently this only adds a dropdown, that shows the options, clicking the option closes the dropdown

import React from 'react';
import Button from './Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu({options}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    setAnchorEl(null);
    console.log(option);
  };
  console.log(options)
  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Explore 🔍
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, i) => 
        <MenuItem key={i} onClick={()=>handleClose(option)}>{option}</MenuItem>
        )}
      </Menu>
    </div>
  );
}