import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Avatar,
  Button,
  IconButton,
  Chip,
  Divider,
  Grid,
  Stack,
} from '@mui/material';
import {
  ThumbUp as ThumbUpIcon,
  ThumbDown as ThumbDownIcon,
  Reply as ReplyIcon,
  Download as DownloadIcon,
  MoreHoriz as MoreHorizIcon,
  NotificationsNone as NotificationsIcon,
} from '@mui/icons-material';
import VideoCard from '../components/VideoCard';

const relatedVideos = [
  {
    id: '9',
    title: 'React Hooks Explained: useEffect, useState, useContext',
    channelName: 'React Mastery',
    views: '892K views',
    timestamp: '3 days ago',
    duration: '42:18',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=360&h=202&fit=crop',
    channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=36&h=36&fit=crop&crop=face',
  },
  {
    id: '10',
    title: 'Modern CSS Techniques Every Developer Should Know',
    channelName: 'CSS Pro',
    views: '1.1M views',
    timestamp: '1 day ago',
    duration: '35:42',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=360&h=202&fit=crop',
    channelAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b142?w=36&h=36&fit=crop&crop=face',
  },
  {
    id: '11',
    title: 'JavaScript ES2024: New Features and Updates',
    channelName: 'JS Updates',
    views: '756K views',
    timestamp: '2 days ago',
    duration: '28:15',
    thumbnail: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=360&h=202&fit=crop',
    channelAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=36&h=36&fit=crop&crop=face',
  },
];

const VideoPlayer: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Box sx={{ backgroundColor: '#FAFAFA', minHeight: '100vh', p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          {/* Video Player */}
          <Box
            sx={{
              width: '100%',
              height: { xs: '250px', sm: '400px', md: '500px' },
              backgroundColor: '#000',
              borderRadius: '12px',
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: 'url(https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Box
              sx={{
                width: '80px',
                height: '80px',
                backgroundColor: 'rgba(255, 0, 0, 0.8)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'rgba(255, 0, 0, 1)',
                },
              }}
            >
              <Typography sx={{ color: 'white', fontSize: '24px', ml: '4px' }}>▶</Typography>
            </Box>
          </Box>

          {/* Video Title */}
          <Typography
            variant="h5"
            component="h1"
            sx={{
              fontWeight: 600,
              mb: 2,
              fontSize: { xs: '18px', sm: '22px' },
              lineHeight: 1.3,
            }}
          >
            Build a Complete YouTube Clone with React JS | Full Tutorial 2024
          </Typography>

          {/* Video Actions */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}
          >
            <Typography variant="body2" color="text.secondary">
              1,234,567 views • Dec 10, 2024
            </Typography>
            <Stack direction="row" spacing={1}>
              <Button
                startIcon={<ThumbUpIcon />}
                variant="outlined"
                size="small"
                sx={{ borderRadius: '18px', textTransform: 'none' }}
              >
                12K
              </Button>
              <Button
                startIcon={<ThumbDownIcon />}
                variant="outlined"
                size="small"
                sx={{ borderRadius: '18px', textTransform: 'none' }}
              >
                Dislike
              </Button>
              <Button
                startIcon={<ReplyIcon />}
                variant="outlined"
                size="small"
                sx={{ borderRadius: '18px', textTransform: 'none' }}
              >
                Share
              </Button>
              <Button
                startIcon={<DownloadIcon />}
                variant="outlined"
                size="small"
                sx={{ borderRadius: '18px', textTransform: 'none' }}
              >
                Download
              </Button>
              <IconButton size="small">
                <MoreHorizIcon />
              </IconButton>
            </Stack>
          </Stack>

          <Divider sx={{ mb: 2 }} />

          {/* Channel Info */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Avatar
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face"
              sx={{ width: 48, height: 48, mr: 2 }}
            />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '16px' }}>
                Code With React
              </Typography>
              <Typography variant="body2" color="text.secondary">
                2.1M subscribers
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              startIcon={<NotificationsIcon />}
              sx={{
                borderRadius: '24px',
                textTransform: 'none',
                fontWeight: 500,
                px: 3,
              }}
            >
              Subscribe
            </Button>
          </Box>

          {/* Description */}
          <Box
            sx={{
              backgroundColor: '#f2f2f2',
              borderRadius: '12px',
              p: 2,
              mb: 3,
            }}
          >
            <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
              In this comprehensive tutorial, we'll build a complete YouTube clone using React JS, 
              Material-UI, and modern web development practices. You'll learn how to create a 
              responsive user interface, implement search functionality, manage state effectively, 
              and much more!
              <br /><br />
              🔗 Source Code: https://github.com/example/youtube-clone
              <br />
              ⭐ Timestamps:
              <br />
              00:00 Introduction
              <br />
              05:30 Setting up the project
              <br />
              15:45 Building the header component
              <br />
              32:10 Creating the sidebar
              <br />
              48:20 Video grid layout
              <br />
              1:15:30 Video player page
              <br />
              1:45:15 Search functionality
              <br />
              2:05:40 Final touches and deployment
            </Typography>
          </Box>

          {/* Comments Section */}
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            Comments • 1,234
          </Typography>
        </Grid>

        {/* Related Videos Sidebar */}
        <Grid item xs={12} lg={4}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            Up next
          </Typography>
          <Stack spacing={2}>
            {relatedVideos.map((video) => (
              <Box key={video.id} sx={{ display: 'flex', gap: 1 }}>
                <Box
                  component="img"
                  src={video.thumbnail}
                  alt={video.title}
                  sx={{
                    width: '168px',
                    height: '94px',
                    borderRadius: '8px',
                    objectFit: 'cover',
                    flexShrink: 0,
                  }}
                />
                <Box sx={{ overflow: 'hidden' }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 500,
                      lineHeight: 1.3,
                      mb: 0.5,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      fontSize: '14px',
                    }}
                  >
                    {video.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: 'block', mb: 0.5 }}
                  >
                    {video.channelName}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {video.views} • {video.timestamp}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VideoPlayer;