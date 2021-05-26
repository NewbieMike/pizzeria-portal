import React from 'react';
import {NavLink} from 'react-router-dom';
// import styles from './PageNav.module.scss';

const PageNav = () => {

  return (
    <nav>
      <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</NavLink>
      <NavLink exact to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiters</NavLink>
      <NavLink exact to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
    </nav>
  );
};

export default PageNav;