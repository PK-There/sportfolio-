import React, { useEffect } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LanguageSelector from '../components/LanguageSelector';

const DashboardLayout = ({ theme, toggleTheme }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { currentUser, userProfile, loading } = useAuth();
    const userRole = localStorage.getItem('userRole');
    
    useEffect(() => {
        // If user is not authenticated, redirect to login
        if (!currentUser && !loading) {
            navigate('/login');
        } else if (currentUser && !userRole && !loading) {
            // User is logged in but doesn't have a role set, redirect to role selection
            navigate('/get-started');
        }
        // Don't redirect while loading is in progress
    }, [currentUser, userRole, loading, navigate]);

    const handleLogout = () => {
        localStorage.removeItem('userRole');
        navigate('/login');
    };

    // Role-based navigation items
    const getDashboardLinks = () => {
        const links = {
            athlete: { path: '/dashboard/athlete', label: 'My Dashboard' },
            coach: { path: '/dashboard/coach', label: 'My Dashboard' },
            org: { path: '/dashboard/org', label: 'My Dashboard' }
        };
        return links[userRole] || links.athlete;
    };

    const dashboardLink = getDashboardLinks();
    return (
        <div className="dashboard-container" style={{ display: 'flex', minHeight: '100vh' }}>
            {/* Sidebar */}
            <aside className="dashboard-sidebar" style={{
                width: '250px',
                padding: '2rem',
                borderRight: '1px solid var(--border-color)',
                backgroundColor: 'var(--glass-bg)'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <div className="logo">
                        Sport<span className="accent-dot">folio</span>
                    </div>
                </div>
                
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <NavLink
                        to={dashboardLink.path}
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        style={({ isActive }) => ({
                            color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                            textDecoration: 'none',
                            fontWeight: '600',
                            padding: '0.5rem 0'
                        })}
                    >
                        {dashboardLink.label}
                    </NavLink>
                    <LanguageSelector />
                </nav>
                <div style={{ height: '1rem' }}></div> {/* Space between language selector and logout */}
                <div style={{ marginTop: 'auto' }}>
                    <button 
                        onClick={handleLogout} 
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            marginBottom: '1rem',
                            border: '1px solid var(--border-color)',
                            borderRadius: '6px',
                            background: 'transparent',
                            color: 'var(--text-secondary)',
                            cursor: 'pointer',
                            fontWeight: '600',
                            transition: 'all 0.2s'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.borderColor = 'var(--accent-primary)';
                            e.target.style.color = 'var(--accent-primary)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.borderColor = 'var(--border-color)';
                            e.target.style.color = 'var(--text-secondary)';
                        }}
                    >
                        Logout
                    </button>
                    <div style={{ marginTop: '1rem' }}>
                        <NavLink to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>
                            ← Back to Home
                        </NavLink>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: '2rem' }}>
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;