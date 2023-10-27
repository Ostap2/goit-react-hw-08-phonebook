import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectLoading } from 'redux/auth/authSelectors';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthMenu from 'components/Menu/Menu';
import Loading from 'components/Loading/Loading';
import './Header.css';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectLoading);

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    setIsHeaderVisible(true);

    window.addEventListener('scroll', handleScroll);
    return () => {

      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 0 && scrollPosition <= 25) {

      setIsHeaderVisible(true);
    } else {

      setIsHeaderVisible(false);
    }
  };

  return (
    <>
      <header className={`header ${isHeaderVisible ? 'visible' : 'hidden'}`}>
        <div>
          {<nav>{isLoggedIn ? <UserMenu /> : <AuthMenu />}</nav>}
        </div>
      </header>
      <main>
        {isLoading ? <Loading /> : <Outlet />}
      </main>
    </>
  );
};

export default Header;
