import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return <>
    <Box component={'div'} sx={{ position: 'fixed', zIndex: 9999, width: '100%', backgroundColor: '#0A1227',py:2 }} >
      <Container maxWidth="lg" sx={{ height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
        <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          <Image
            src="/img/home/Logo.png"
            alt="Logo"
            width={150}
            height={50}
          />
        </Box>
        <Box component={'div'} sx={{
          display: {
            md: "flex",
            xs: "none"
          }, justifyContent: 'space-between', alignItems: 'center'
        }} >

          <Link href="/">
            <a className='navLink' >Home</a>
          </Link>
          <Link href="/about">
            <a className='navLink' >About</a>
          </Link>
          <Link href="/faq">
            <a className='navLink' >FAQS</a>
          </Link>
          <Link href="/game">
            <a className='navLink' >Game</a>
          </Link>
          <Link href="/tokens">
            <a className='navLink' >Tokens</a>
          </Link>
          <Link href="/doc">
            <a className='Docs' >Docs</a>
          </Link>
        </Box>
        {isOpen ? < CloseIcon onClick={toggleDrawer} sx={{
          color: '#FFFFFF', fontSize: '50px', cursor: 'pointer', display: {
            md: 'none'
          }
        }} /> : < MenuIcon onClick={toggleDrawer} sx={{
          display: {
            md: 'none'
          }, color: '#FFFFFF', fontSize: '50px', cursor: 'pointer'
        }} />}
      </Container>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        className='drawer'
      >
        <Box component={'div'} sx={{
          width: '100%', height: '100vh',
          display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#0A1227'
        }} >

          <Link href="/">
            <a onClick={toggleDrawer} className='navLink1' >Home</a>
          </Link>
          <Link href="/about">
            <a onClick={toggleDrawer} className='navLink1' >About</a>
          </Link>
          <Link href="/faq">
            <a onClick={toggleDrawer} className='navLink1' >FAQS</a>
          </Link>
          <Link href="/game">
            <a onClick={toggleDrawer} className='navLink1' >Game</a>
          </Link>
          <Link href="/tokens">
            <a onClick={toggleDrawer} className='navLink1' >Tokens</a>
          </Link>
          <Link href="/doc">
            <a onClick={toggleDrawer} className='Docs' >Docs</a>
          </Link>
        </Box>
      </Drawer>
    </Box>
  </>
}

export default Navbar;
