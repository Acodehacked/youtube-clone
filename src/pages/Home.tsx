import React from 'react';
import { Container, Grid, Box, Chip, Stack } from '@mui/material';
import VideoCard from '../components/VideoCard';

const categories = [
  'All', 'Music', 'Gaming', 'Live', 'News', 'Sports', 'Learning', 'Fashion', 'Comedy'
];

const videoData = [
  {
    id: '1',
    title: 'Build a Complete YouTube Clone with React JS | Full Tutorial 2024',
    channelName: 'Code With React',
    views: '1.2M views',
    timestamp: '2 days ago',
    duration: '2:15:30',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=360&h=202&fit=crop',
    channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=36&h=36&fit=crop&crop=face',
  },
  {
    id: '2',
    title: 'The Future of Web Development: What Every Developer Should Know',
    channelName: 'TechTalks',
    views: '856K views',
    timestamp: '1 week ago',
    duration: '45:20',
    thumbnail: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=360&h=202&fit=crop',
    channelAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=36&h=36&fit=crop&crop=face',
  },
  {
    id: '3',
    title: 'Amazing JavaScript Tips and Tricks You Probably Didn\'t Know',
    channelName: 'JS Mastery',
    views: '2.1M views',
    timestamp: '3 days ago',
    duration: '28:45',
    thumbnail: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=360&h=202&fit=crop',
    channelAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b142?w=36&h=36&fit=crop&crop=face',
  },
  {
    id: '4',
    title: 'React vs Vue vs Angular: Which Framework to Choose in 2024?',
    channelName: 'Frontend Masters',
    views: '743K views',
    timestamp: '5 days ago',
    duration: '1:02:15',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=360&h=202&fit=crop',
    channelAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=36&h=36&fit=crop&crop=face',
  },
  {
    id: '5',
    title: 'Building Modern Web Applications with TypeScript and Next.js',
    channelName: 'Web Dev Simplified',
    views: '1.8M views',
    timestamp: '1 day ago',
    duration: '1:35:22',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=360&h=202&fit=crop',
    channelAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=36&h=36&fit=crop&crop=face',
  },
  {
    id: '6',
    title: 'CSS Grid vs Flexbox: When to Use Each Layout Method',
    channelName: 'CSS Tricks',
    views: '924K views',
    timestamp: '4 days ago',
    duration: '32:18',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=360&h=202&fit=crop',
    channelAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=36&h=36&fit=crop&crop=face',
  },
  {
    id: '7',
    title: 'Advanced React Patterns: Compound Components and Render Props',
    channelName: 'React Academy',
    views: '567K views',
    timestamp: '6 days ago',
    duration: '1:15:45',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=360&h=202&fit=crop',
    channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=36&h=36&fit=crop&crop=face',
  },
  {
    id: '8',
    title: 'Node.js Performance Optimization: Best Practices and Techniques',
    channelName: 'Backend Guru',
    views: '1.3M views',
    timestamp: '1 week ago',
    duration: '58:30',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=360&h=202&fit=crop',
    channelAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=36&h=36&fit=crop&crop=face',
  },
];

const Home: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#FAFAFA', minHeight: '100vh', pt: 2 }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 3, overflowX: 'auto' }}>
          <Stack direction="row" spacing={1} sx={{ minWidth: 'max-content', pb: 1 }}>
            {categories.map((category, index) => (
              <Chip
                key={category}
                label={category}
                clickable
                variant={index === 0 ? 'filled' : 'outlined'}
                sx={{
                  backgroundColor: index === 0 ? '#0f0f0f' : 'transparent',
                  color: index === 0 ? '#fff' : '#0f0f0f',
                  borderColor: index === 0 ? '#0f0f0f' : 'rgba(0, 0, 0, 0.2)',
                  '&:hover': {
                    backgroundColor: index === 0 ? '#0f0f0f' : 'rgba(0, 0, 0, 0.04)',
                  },
                  fontWeight: 500,
                }}
              />
            ))}
          </Stack>
        </Box>
        
        <Grid container spacing={3}>
          {videoData.map((video) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={video.id}>
              <VideoCard {...video} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;