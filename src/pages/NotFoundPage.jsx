import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the homepage after 3 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center', color: 'orange' }}>Not Found, Redirecting to homepage...</div>;
};

export default NotFoundPage;