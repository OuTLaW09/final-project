/* eslint-disable no-duplicate-imports */
import './Burger.scss';
import { Button, Drawer, Radio, Space } from 'antd';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import burgericon from '../../assets/Images/burger-icon.png';
import type { DrawerProps, RadioChangeEvent } from 'antd';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  return (
    <>
      <Space>
        <Button type="primary" onClick={showDrawer}>
          <img src={burgericon} alt="" />
        </Button>
      </Space>
      <Drawer title="Menu" placement={placement} closable={false} onClose={onClose} open={open} key={placement}>
        <Link to="/">
          <button className="Home-button">Home</button>
        </Link>
        <Link to="login">
          <button className="Login-button">Login</button>
        </Link>
        <Link to="sign-up">
          <button className="Signup-button">Sign Up</button>
        </Link>
      </Drawer>
    </>
  );
};

export default App;
