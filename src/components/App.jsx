import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ContactForm from 'components/Contact/ContactForm/ContactForm';
import ContactList from 'components/Contact/ContactItem/ContactList';
import Filter from 'components/Contact/Filter/Filter';
import UserMenu from './Profile/UserMenu';
import Navigation from './Profile/Navigation';
import RegisterPage from './Profile/RegisterPage';
import LoginPage from './Profile/LoginPage';
import ContactsPage from './Profile/ContactsPage';
import { Container } from './App.styled';

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Додати логіку виходу з облікового запису тут
  };

  useEffect(() => {
    // Додати логіку для перевірки аутентифікації користувача, наприклад, в хуку використовується useEffect
  }, []);

  return (
    <Router>
      <Container>
        <h1>Phonebook</h1>
        {user ? <UserMenu email={user.email} onLogout={handleLogout} /> : null}
        <Navigation />
        <h2>Contacts</h2>
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/contacts" component={ContactsPage} />
      </Container>
    </Router>
  );
}

export default App;
