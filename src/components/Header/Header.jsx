import './Header.css';
import { Link, NavLink } from 'react-router-dom';

//Desktop: 2 sections
//left:logo
//center: menu
//right: login
//Mobile: 2 sections
//left: menu
//center: log
//right: login

// const menuRoutes = [
//   {
//     path: '/',
//     component: 'Home',
//   },
//   {
//     path: '/projects',
//     component: 'Projects',
//   },
//   {
//     path: '/about',
//     component: 'About',
//   },
// ];

function Header() {
  return (
    <header className="container">
      <nav>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/projects">projects</NavLink>
      </nav>
    </header>
  );
}

export default Header;
