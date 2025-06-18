import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Box,
  Avatar,
  Badge,
  Tooltip,
  alpha,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  VideoCall as VideoCallIcon,
  Apps as AppsIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '24px',
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  border: '1px solid #ccc',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.08),
  },
  marginLeft: 0,
  width: '100%',
  maxWidth: '600px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: 0,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  borderTopRightRadius: '24px',
  borderBottomRightRadius: '24px',
  borderLeft: '1px solid #ccc',
  width: '64px',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 8, 1, 2),
    paddingLeft: theme.spacing(2),
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search for:', searchQuery);
  };

  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: '#FFFFFF',
        color: '#000000',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onMenuClick}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube"
            sx={{
              height: 20,
              cursor: 'pointer',
              display: { xs: 'none', sm: 'block' },
            }}
          />
        </Box>

        <Box
          component="form"
          onSubmit={handleSearchSubmit}
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
            maxWidth: '728px',
            mx: 2,
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Tooltip title="Create">
            <IconButton color="inherit">
              <VideoCallIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="YouTube apps">
            <IconButton color="inherit" sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <AppsIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton color="inherit">
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Account">
            <IconButton sx={{ p: 0, ml: 1 }}>
              <Avatar sx={{ width: 32, height: 32 }}>U</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;