import React, { useEffect } from 'react';
import Logo from '/Logo.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { useTranslationContext } from '../translationContext';

const NavBar = () => {
  const { t, i18n, changeLanguage } = useTranslationContext();
  const navigate = useNavigate();

  const margin = i18n.language === 'ar' ? 'ms-auto' : 'me-auto';

  const activeStyle = {
    fontWeight: 'bold',
    color: 'var(--primary)',
    borderBottom: '3px solid var(--primary)',
    paddingBottom: '2px',
  };

  useEffect(() => {
    document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <Navbar expand="lg" className="navbar-light px-3 container-xl">
      <Link to='/'>
        <Navbar.Brand className="p-0 px-5 ps-5">
          <img src={Logo} width="50" height="60" alt="Logo" />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle className='bg-white text-dark' aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className={`px-5 ${margin}`}>
          <Nav.Item>
            <NavLink className="nav-link mx-4" to="/" style={({ isActive }) => (isActive ? activeStyle : {})}>
              {t('home')}
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link mx-4"
              to="/about"
              style={({ isActive }) => (isActive ? activeStyle : {})}
            >
              {t('about')}
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link mx-4"
              to="/services"
              style={({ isActive }) => (isActive ? activeStyle : {})}
            >
              {t('service')}
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link mx-4"
              to="/client"
              style={({ isActive }) => (isActive ? activeStyle : {})}
            >
              {t('client')}
            </NavLink>
          </Nav.Item>
        </Nav>
        <section className="d-flex gap-2 align-items-center">
          <Dropdown>
            <Dropdown.Toggle className='bg-transparent text-dark' variant="light" id="dropdown-basic">
              <FontAwesomeIcon icon={faEarth} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {i18n.language === 'en' ? (
                <Dropdown.Item onClick={() => changeLanguage('ar')}>{t('arabic')}</Dropdown.Item>
              ) : (
                <Dropdown.Item onClick={() => changeLanguage('en')}>{t('english')}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <button variant="primary" className=' btn btn-lg px-5' onClick={() => navigate('/contacts')}>
            {t('contactUs')}
          </button>
        </section>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;