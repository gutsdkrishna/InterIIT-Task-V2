import styled, { createGlobalStyle, keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

  body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
`;

export const LoginContainer = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  padding: 50px;
  width: 400px;
  animation: ${fadeIn} 0.6s ease-out;
`;

export const Title = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div`
  position: relative;
  margin-bottom: 25px;
`;

const inputStyles = css`
  width: 80%;
  padding: 15px 15px 15px 50px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 16px;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.8);

  &:focus {
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
    outline: none;
  }
`;

export const Input = styled.input`
  ${inputStyles}
`;

export const InputIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: #aaa;
  transition: color 0.3s ease;

  ${InputGroup}:focus-within & {
    color: #4a90e2;
  }
`;

export const Button = styled(motion.button)`
  background: linear-gradient(135deg, #4a90e2 0%, #357ae8 100%);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 15px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const ErrorMessage = styled(motion.p)`
  color: #e74c3c;
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${shake} 0.5s ease-in-out;
`;

export const SignUpRedirect = styled.div`
  margin-top: 25px;
  text-align: center;
  font-size: 15px;
  color: #666;
  
  button {
    margin-left: 5px;
    background: none;
    border: none;
    color: #4a90e2;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #357ae8;
      text-decoration: underline;
    }
  }
`;

export const ForgotPassword = styled.a`
  text-align: right;
  margin-top: 25px;
  font-size: 14px;
  color: #4a90e2;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #357ae8;
    text-decoration: underline;
  }
`;


export const GitHubButton = styled(motion.button)`
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  &:hover {
    background-color: #24292e;
  }
`;
