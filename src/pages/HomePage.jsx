import { Container, DivStyle } from 'components/App.styled';
import React from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const HomePage = () => {
  const isLogedIn = useSelector(selectIsLoggedIn);
  if (isLogedIn) {
    return <Navigate to="/contacts" replace />;
  }
  return (
    <Container>
      <h1 className="title">
PhoneBook
      </h1>
      <DivStyle>
        Please
        <NavLink to="/register">
          Register
        </NavLink>
        or
        <NavLink to="/login">
          Login
        </NavLink>
      </DivStyle>
    </Container>
  );
};

export default HomePage;
