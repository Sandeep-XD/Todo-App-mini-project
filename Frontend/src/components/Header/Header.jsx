import React from 'react'

import{Container,Logo,LogoutBtn} from '../index'
import{useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const {user} = useSelector((state) => state.auth.isAuthenticated)
    const navigate = useNavigate();
    const navItem = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];
  return (
    <header className='bg-gray-800 text-white py-4'>
      <Container>
        <div className='flex justify-between items-center'>
          <Logo />
          <nav className='space-x-4'>
            {navItem.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className='text-white hover:text-gray-300'
              >
                {item.name}
              </button>
            ))}
          </nav>
          {user ? (
            <LogoutBtn />
          ) : (
            <button
              onClick={() => navigate('/login')}
              className='btn btn-primary'
            >
              Login
            </button>
          )}
        </div>
      </Container>
    </header>
  )
}

export default Header