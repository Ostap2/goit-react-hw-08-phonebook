import { NavLink } from 'react-router-dom';
import { ListStyle } from './Menu.styled';

const AuthMenu = () => {
  return (
    <>
      <NavLink to="/">
        Home
      </NavLink>
      <ListStyle>
        <li>
          <NavLink to="/register">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">
            Login
          </NavLink>
        </li>
      </ListStyle>
    </>
  );
};

export default AuthMenu;
