import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, allowedRole = null }) => {
  const { currentUser, userProfile, loading } = useAuth();

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        fontSize: '1.5rem',
        color: 'var(--text-primary)'
      }}>
        Loading...
      </div>
    );
  }

  // If no currentUser, always redirect to login regardless of loading state
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // Check role after confirming user is authenticated
  if (allowedRole) {
    // Wait for userProfile to load if it's null/undefined
    if (!userProfile) {
      // If we have a role in localStorage that matches the allowed role, allow access
      const localRole = localStorage.getItem('userRole');
      if (localRole === allowedRole) {
        return children;
      } else if (localRole && localRole !== allowedRole) {
        // User has a different role in localStorage, redirect to their dashboard
        return <Navigate to={`/dashboard/${localRole}`} replace />;
      } else {
        // No role found anywhere, redirect to role selection
        return <Navigate to="/get-started" replace />;
      }
    }
    
    // userProfile is loaded, now check the role
    if (userProfile.role && userProfile.role !== allowedRole) {
      // User doesn't have the required role
      if (userProfile.role) {
        // Redirect to their correct dashboard
        return <Navigate to={`/dashboard/${userProfile.role}`} replace />;
      } else {
        // No role assigned yet, redirect to role selection
        const userRole = localStorage.getItem('userRole');
        if (userRole) {
          // Has role in localStorage but not synced with backend yet
          return <Navigate to={`/dashboard/${userRole}`} replace />;
        }
        return <Navigate to="/get-started" replace />;
      }
    }
  }

  return children;
};

export default ProtectedRoute;