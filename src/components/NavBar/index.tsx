import React from 'react';
import NavbarStyle from './navbar.style';

interface INavBar {
  className?: string;
  /** Used to render menu, logo, button or any component that
   * you want to show in navbar. */
  children?: any;
  navbarStyle?: string;
  width?: string | number;
  height?: string | number;
  space?: string | number;
  borderRadius?: string | number;
  boxShadow?: string;
  color?: string;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  flexWrap?: string;
}

export const Navbar = (navProps: INavBar) => {
  const { className, children, navbarStyle, ...props } = navProps;
  
  // Add all classs to an array
  const addAllClasses = ['reusecore__navbar'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <NavbarStyle className={addAllClasses.join(' ')} {...props}>
      {children}
    </NavbarStyle>
  );
};