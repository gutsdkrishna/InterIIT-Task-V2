import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { supabase } from './supabase'; // Import Supabase client
import { motion } from 'framer-motion'; // For animations
import { GlobalStyle, LoginContainer, Title, Form, InputGroup, Input, InputIcon, Button, ErrorMessage, SignUpRedirect, ForgotPassword, GitHubButton } from './LoginStyles'; // Import your styled components
import { Mail, Lock } from 'lucide-react'; // Icons

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Add loading state
  const [session, setSession] = useState(null); // Track session manually
    const [authenticating, setAuthenticating] = useState(false); // Track OAuth process


  useEffect(() => {
    const checkSession = async () => {
      setAuthenticating(true); // Show loading during OAuth authentication

      const { data: { session } } = await supabase.auth.getSession();
      setSession(session); // Set session state
      setLoading(false); // Stop loading
      setAuthenticating(false); // End OAuth loading
    };

    checkSession(); // Check session on component mount
  }, []);

  // If still loading, show a loading message or spinner
  if (loading || authenticating) return <div>Loading, please wait...</div>;

  // If there is a session, navigate to the dashboard
  if (session) {
    navigate('/dashboard');
    return null; // Prevent rendering after navigation
  }

  // If no session, return the login page JSX (rest of your component logic)


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        setError(error.message);
      } else {
        // Successful login
        console.log('Logged in:', user);
        navigate('/dashboard'); // Redirect to dashboard after login
      }
    } catch (error) {
      setError('Login failed');
    }
  };

  const handleSignUpRedirect = () => {
    navigate('/signup'); // Redirect to sign-up page
  };

  const handleGitHubSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: 'https://ojarldoudzxbivbinjav.supabase.co/auth/v1/callback',
        }
      });

      if (error) throw error;

      // After successful OAuth, check session
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session); // Set session state

      if (session) {
        console.log('GitHub sign-in successful');
        navigate('/dashboard'); // Navigate after session is verified
      }
    } catch (error) {
      setError('GitHub Sign-in failed: ' + error.message);
      console.error('GitHub Sign-in Error:', error);
    }
  };

  return (
    <>
      <GlobalStyle />
      <LoginContainer
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title>Login</Title>
        <Form onSubmit={handleLogin}>
          <InputGroup>
            <InputIcon><Mail /></InputIcon>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <InputIcon><Lock /></InputIcon>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>

          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
          >
            Login
          </Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}

          <ForgotPassword href="#">Forgot your password?</ForgotPassword>
        </Form>

        <GitHubButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGitHubSignIn}
        >
          Sign in with GitHub
        </GitHubButton>

        <SignUpRedirect>
          Don't have an account? <button onClick={handleSignUpRedirect}>Sign up</button>
        </SignUpRedirect>
      </LoginContainer>
    </>
  );
}
