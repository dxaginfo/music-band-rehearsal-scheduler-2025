import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

// Layout components
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

// Page components
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import BandList from './pages/bands/BandList';
import BandDetails from './pages/bands/BandDetails';
import CreateBand from './pages/bands/CreateBand';
import RehearsalList from './pages/rehearsals/RehearsalList';
import RehearsalDetails from './pages/rehearsals/RehearsalDetails';
import ScheduleRehearsal from './pages/rehearsals/ScheduleRehearsal';
import Profile from './pages/user/Profile';
import VenueList from './pages/venues/VenueList';
import VenueDetails from './pages/venues/VenueDetails';
import NotFound from './pages/NotFound';

// Auth guard component
import PrivateRoute from './components/routing/PrivateRoute';

// Create a theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Routes>
              {/* Auth routes */}
              <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Route>
              
              {/* App routes */}
              <Route element={<PrivateRoute><MainLayout /></PrivateRoute>}>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                
                {/* Band routes */}
                <Route path="/bands" element={<BandList />} />
                <Route path="/bands/create" element={<CreateBand />} />
                <Route path="/bands/:bandId" element={<BandDetails />} />
                
                {/* Rehearsal routes */}
                <Route path="/rehearsals" element={<RehearsalList />} />
                <Route path="/rehearsals/schedule" element={<ScheduleRehearsal />} />
                <Route path="/rehearsals/:rehearsalId" element={<RehearsalDetails />} />
                
                {/* Venue routes */}
                <Route path="/venues" element={<VenueList />} />
                <Route path="/venues/:venueId" element={<VenueDetails />} />
                
                {/* User routes */}
                <Route path="/profile" element={<Profile />} />
              </Route>
              
              {/* 404 route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;