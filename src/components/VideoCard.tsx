import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  Box,
  Chip,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface VideoCardProps {
  id: string;
  title: string;
  channelName: string;
  views: string;
  timestamp: string;
  duration: string;
  thumbnail: string;
  channelAvatar: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  id,
  title,
  channelName,
  views,
  timestamp,
  duration,
  thumbnail,
  channelAvatar,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/watch/${id}`);
  };

  return (
    <Card
      sx={{
        maxWidth: 360,
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
        },
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
      onClick={handleCardClick}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="202"
          image={thumbnail}
          alt={title}
          sx={{
            borderRadius: '12px',
            objectFit: 'cover',
          }}
        />
        <Chip
          label={duration}
          size="small"
          sx={{
            position: 'absolute',
            bottom: 8,
            right: 8,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            fontSize: '12px',
            height: '20px',
          }}
        />
      </Box>
      <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
        <Box sx={{ display: 'flex', gap: 1.5 }}>
          <Avatar
            src={channelAvatar}
            sx={{ width: 36, height: 36, flexShrink: 0 }}
          />
          <Box sx={{ overflow: 'hidden' }}>
            <Typography
              variant="body1"
              component="h3"
              sx={{
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: 1.3,
                mb: 0.5,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                color: '#0f0f0f',
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: '14px',
                mb: 0.5,
                '&:hover': {
                  color: '#0f0f0f',
                },
              }}
            >
              {channelName}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: '14px' }}
            >
              {views} • {timestamp}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VideoCard;