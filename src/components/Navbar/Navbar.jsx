import React, { useState } from 'react';
import { Menu } from '../Menu';
import { Sidebar } from './Sidebar';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Menu toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </>
  );
}
