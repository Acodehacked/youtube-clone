import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import VideoPlayer from './pages/VideoPlayer';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF0000',
    },
    secondary: {
      main: '#065FD4',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#000000',
        },
      },
    },
  },
});

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header onMenuClick={toggleSidebar} />
          <Box sx={{ display: 'flex', flex: 1 }}>
            <Sidebar open={sidebarOpen} />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                marginLeft: sidebarOpen ? { xs: 0, md: '240px' } : { xs: 0, md: '72px' },
                transition: 'margin 0.3s ease',
                backgroundColor: '#FAFAFA',
                minHeight: 'calc(100vh - 64px)',
              }}
            >
              <Routes>
                <Route path="/youtube-clone" element={<Home />} />
                <Route path="/youtube-clone/watch/:id" element={<VideoPlayer />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;