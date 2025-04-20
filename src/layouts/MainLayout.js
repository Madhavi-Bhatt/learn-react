import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery,
  ListItemIcon,
  Avatar,
  Menu,
  MenuItem,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ExtensionIcon from '@mui/icons-material/Extension';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import InputIcon from '@mui/icons-material/Input';
import ApiIcon from '@mui/icons-material/Api';
import PaymentIcon from '@mui/icons-material/Payment';
import SecurityIcon from '@mui/icons-material/Security';
import WebIcon from '@mui/icons-material/Web';
import BugReportIcon from '@mui/icons-material/BugReport';
import ErrorIcon from '@mui/icons-material/Error';
import TranslateIcon from '@mui/icons-material/Translate';
import QuizIcon from '@mui/icons-material/Quiz';
import PersonIcon from '@mui/icons-material/Person';
import { useAuth } from '../contexts/AuthContext';

const drawerWidth = 240;

const MainLayout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
    navigate('/');
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          React Concepts
        </Typography>
      </Toolbar>
      <List>
        <ListItem button component={RouterLink} to="/">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={RouterLink} to="/concepts">
          <ListItemIcon><MenuBookIcon /></ListItemIcon>
          <ListItemText primary="All Concepts" />
        </ListItem>
        <ListItem button component={RouterLink} to="/quiz">
          <ListItemIcon><QuizIcon /></ListItemIcon>
          <ListItemText primary="Take Quiz" />
        </ListItem>
        <ListItem button component={RouterLink} to="/concept/1">
          <ListItemIcon><ExtensionIcon /></ListItemIcon>
          <ListItemText primary="Components & Props" />
        </ListItem>
        <ListItem button component={RouterLink} to="/concept/2">
          <ListItemIcon><StorageIcon /></ListItemIcon>
          <ListItemText primary="State & Lifecycle" />
        </ListItem>
        <ListItem button component={RouterLink} to="/concept/3">
          <ListItemIcon><CodeIcon /></ListItemIcon>
          <ListItemText primary="Hooks" />
        </ListItem>
        <ListItem button component={RouterLink} to="/concept/4">
          <ListItemIcon><AccountTreeIcon /></ListItemIcon>
          <ListItemText primary="Context" />
        </ListItem>
        <ListItem button component={RouterLink} to="/concept/5">
          <ListItemIcon><InputIcon /></ListItemIcon>
          <ListItemText primary="Forms & Events" />
        </ListItem>
        <ListItem button component={RouterLink} to="/concept/8">
          <ListItemIcon><AccountTreeIcon /></ListItemIcon>
          <ListItemText primary="React Router" />
        </ListItem>
        <ListItem button component={RouterLink} to="/concept/10">
          <ListItemIcon><ExtensionIcon /></ListItemIcon>
          <ListItemText primary="Additional Hooks" />
        </ListItem>
        <ListItem button component={RouterLink} to="/concept/11">
          <ListItemIcon><StorageIcon /></ListItemIcon>
          <ListItemText primary="Browser Storage" />
        </ListItem>
        <ListItem button component={RouterLink} to="/concept/12">
          <ListItemIcon><ApiIcon /></ListItemIcon>
          <ListItemText primary="API Integration" />
        </ListItem>
        <ListItem button component={RouterLink} to="/concept/15">
          <ListItemIcon><PaymentIcon /></ListItemIcon>
          <ListItemText primary="Payment Integration" />
        </ListItem>
        <ListItem button component={RouterLink} to="/concept/13">
          <ListItemIcon><ExtensionIcon /></ListItemIcon>
          <ListItemText primary="Higher Order Components" />
        </ListItem>
        <ListItem button component={RouterLink} to="/concept/14">
          <ListItemIcon><SecurityIcon /></ListItemIcon>
          <ListItemText primary="JWT Authentication" />
        </ListItem>
        <ListItem button component={RouterLink} to="/concept/17">
          <ListItemIcon><StorageIcon /></ListItemIcon>
          <ListItemText primary="Redux" />
        </ListItem>
        <ListItem button component={RouterLink} to="/concept/16">
          <ListItemIcon><WebIcon /></ListItemIcon>
          <ListItemText primary="WebSocket" />
        </ListItem>
        <ListItem button component={RouterLink} to="/concept/18">
          <ListItemIcon><BugReportIcon /></ListItemIcon>
          <ListItemText primary="Testing" />
        </ListItem>
        <ListItem button component={RouterLink} to="/concept/19">
          <ListItemIcon><ErrorIcon /></ListItemIcon>
          <ListItemText primary="Error Handling & Debugging" />
        </ListItem>
        <ListItem button component={RouterLink} to="/concept/20">
          <ListItemIcon><TranslateIcon /></ListItemIcon>
          <ListItemText primary="Internationalization" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          borderLeft: 'none',
          borderRight: 'none',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          {user ? (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="subtitle1" sx={{ display: { xs: 'none', sm: 'block' } }}>
                  {user.name}
                </Typography>
                <IconButton
                  onClick={handleMenu}
                  color="inherit"
                >
                  <Avatar
                    alt={user.name}
                    src={user.picture}
                    sx={{ width: 32, height: 32 }}
                  />
                </IconButton>
              </Box>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem disabled>{user.email}</MenuItem>
                <MenuItem onClick={() => { handleClose(); navigate('/profile'); }}>
                  <ListItemIcon>
                    <PersonIcon fontSize="small" />
                  </ListItemIcon>
                  Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Button color="inherit" component={RouterLink} to="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ 
          width: { sm: drawerWidth }, 
          flexShrink: { sm: 0 },
          '& .MuiDrawer-paper': {
            borderRight: 'none',
            boxShadow: 'none',
          }
        }}
      >
        {isMobile ? (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        ) : (
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        )}
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: '64px',
        }}
      >
        <Container maxWidth="lg">
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout; 