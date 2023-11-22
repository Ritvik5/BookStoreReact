import React from 'react'
import '../header/Header.css'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material'
import Logo from '../../Assets/BookLogo2.png'
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'
import { PersonOutline, ShoppingCartOutlined } from '@mui/icons-material'


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'white',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  color: 'gray',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: 'grey',

    [theme.breakpoints.up('md')]: {
      width: '55ch',
    },
  },
}));


export default function HeaderBar() {
  return (
    <div className='main'>

      <Box>
        <AppBar style={{ display: 'flex' }}>
          <Toolbar className='appbar'>
            <Typography id='typo' variant='h6' noWrap sx={{ display: { xs: 'none', sm: 'block' } }}>
              <div className='booklogo'>
                <img id='image1' src={Logo} alt='logo'></img>
                <p id='textbook'>BookStore</p>
              </div>
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <div className='profile'>
              <IconButton

                color='inherit'
              >
                <PersonOutline />
              </IconButton>
              <span id='profile'> Profile</span>
            </div>
            <Menu
              d="menu-appbar"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',

              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem>My Profile</MenuItem>
              <MenuItem>SignOut</MenuItem>
            </Menu>
            <div className='cart'>
              <div className='data'>
                <IconButton id='icon'>
                  <ShoppingCartOutlined />
                </IconButton>
              </div>
              <span id='cart'>Cart</span>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}
