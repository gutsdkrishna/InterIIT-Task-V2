// ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from './supabase'; // Import Supabase client

const ProtectedRoute = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      // Explicitly check for session after OAuth sign-in
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    };

    checkSession();

    // Subscribe to session changes, especially for OAuth flows
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      // Wait for session after OAuth sign-in
      if (!session) {
        // Attempt to get the session again after the OAuth flow
        const { data: { session: newSession } } = await supabase.auth.getSession();
        setSession(newSession);
      } else {
        setSession(session);
      }
    });

    return () => subscription?.unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>; // Add a loading state while checking the session

  return session ? children : <Navigate to="/" />; // Redirect to login if no session
};

export default ProtectedRoute;
