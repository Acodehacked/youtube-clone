import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Box,
} from '@mui/material';
import {
  Home as HomeIcon,
  Explore as ExploreIcon,
  Subscriptions as SubscriptionsIcon,
  VideoLibrary as VideoLibraryIcon,
  History as HistoryIcon,
  OndemandVideo as OndemandVideoIcon,
  WatchLater as WatchLaterIcon,
  ThumbUp as ThumbUpIcon,
  ExpandMore as ExpandMoreIcon,
  Whatshot as WhatshotIcon,
  MusicNote as MusicNoteIcon,
  SportsEsports as SportsEsportsIcon,
  Movie as MovieIcon,
  LiveTv as LiveTvIcon,
} from '@mui/icons-material';

interface SidebarProps {
  open: boolean;
}

const drawerWidth = 240;
const miniDrawerWidth = 72;

const menuItems = [
  { text: 'Home', icon: <HomeIcon />, path: '/' },
  { text: 'Explore', icon: <ExploreIcon />, path: '/explore' },
  { text: 'Subscriptions', icon: <SubscriptionsIcon />, path: '/subscriptions' },
];

const libraryItems = [
  { text: 'Library', icon: <VideoLibraryIcon />, path: '/library' },
  { text: 'History', icon: <HistoryIcon />, path: '/history' },
  { text: 'Your videos', icon: <OndemandVideoIcon />, path: '/your-videos' },
  { text: 'Watch later', icon: <WatchLaterIcon />, path: '/watch-later' },
  { text: 'Liked videos', icon: <ThumbUpIcon />, path: '/liked-videos' },
  { text: 'Show more', icon: <ExpandMoreIcon />, path: '#' },
];

const exploreItems = [
  { text: 'Trending', icon: <WhatshotIcon />, path: '/trending' },
  { text: 'Music', icon: <MusicNoteIcon />, path: '/music' },
  { text: 'Gaming', icon: <SportsEsportsIcon />, path: '/gaming' },
  { text: 'Movies', icon: <MovieIcon />, path: '/movies' },
  { text: 'Live', icon: <LiveTvIcon />, path: '/live' },
];

const Sidebar: React.FC<SidebarProps> = ({ open }) => {
  const renderMenuItem = (item: any, index: number) => (
    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center',
            color: 'inherit',
          }}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText
          primary={item.text}
          sx={{
            opacity: open ? 1 : 0,
            '& .MuiListItemText-primary': {
              fontSize: '14px',
              fontWeight: 400,
            },
          }}
        />
      </ListItemButton>
    </ListItem>
  );

  const drawerContent = (
    <Box sx={{ overflow: 'auto', pt: 1 }}>
      <List>
        {menuItems.map((item, index) => renderMenuItem(item, index))}
      </List>
      
      {open && (
        <>
          <Divider sx={{ my: 1 }} />
          <List>
            {libraryItems.map((item, index) => renderMenuItem(item, index))}
          </List>
          
          <Divider sx={{ my: 1 }} />
          <Box sx={{ px: 2.5, py: 1 }}>
            <Typography variant="body2" color="text.secondary" fontWeight={500}>
              Explore
            </Typography>
          </Box>
          <List>
            {exploreItems.map((item, index) => renderMenuItem(item, index))}
          </List>
          
          <Divider sx={{ my: 1 }} />
          <Box sx={{ px: 2.5, py: 2 }}>
            <Typography variant="caption" color="text.secondary">
              About Press Copyright<br />
              Contact us Creators<br />
              Advertise Developers<br />
              Terms Privacy Policy & Safety<br />
              How YouTube works<br />
              Test new features
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
              © 2024 Google LLC
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={true}
      sx={{
        width: open ? drawerWidth : miniDrawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? drawerWidth : miniDrawerWidth,
          boxSizing: 'border-box',
          top: '64px',
          height: 'calc(100vh - 64px)',
          transition: 'width 0.3s ease',
          overflowX: 'hidden',
          borderRight: '1px solid rgba(0, 0, 0, 0.12)',
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
};

export default Sidebar;