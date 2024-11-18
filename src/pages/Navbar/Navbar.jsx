import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from "../../components";
import classes from './Navbar.module.scss'; 

const Navbar = () => {
  const [isBlurred, setIsBlurred] = useState(false);

  const handleToggleBlur = (isOpen) => {
    setIsBlurred(isOpen);
  };

  return (
    <div className={`${classes.navbar} ${isBlurred ? classes.blurred : ''}`}>
      <Header onToggleBlur={handleToggleBlur} />
      <main className={classes['main-content']}>
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
