import React, { useEffect } from 'react';
import Logo from '/Logo.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';
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
    <Navbar expand="lg" className="navbar-light px-3 pt-4 container-xl">
      <Link to='/'>
        <Navbar.Brand className="p-0 px-5 ps-5">
          <img src={Logo} width="50" height="60" alt="Logo" />
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle className='bg-white text-dark' aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className={`px-5 ${margin}`}>
          <Nav.Item className="d-lg-none d-flex d-md-flex d-sm-flex align-items-center justify-content-start gap-1" onClick={() => changeLanguage(i18n.language === 'en' ? 'ar' : 'en')} style={{ cursor: 'pointer', color: 'var(--primary)' }} >
            <FontAwesomeIcon icon={faRepeat} />
            {
              i18n.language === 'en' ? <span style={{ color: 'var(--primary)' }} className="nav-link mx-2">{t('arabic')}</span> : <span style={{ color: 'var(--primary)' }} className="nav-link mx-2">{t('english')}</span>
            }
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link mx-4" to="/" style={({ isActive }) => (isActive ? activeStyle : {})}>
              {t('home')}
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link mx-4" to="/about" style={({ isActive }) => (isActive ? activeStyle : {})}>
              {t('about')}
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link mx-4" to="/services" style={({ isActive }) => (isActive ? activeStyle : {})}>
              {t('service')}
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link mx-4" to="/client" style={({ isActive }) => (isActive ? activeStyle : {})}>
              {t('client')}
            </NavLink>
          </Nav.Item>
        </Nav>
        <section className='d-flex justify-content-center row-gap-2 my-0 column-gap-3'>
          <div className="d-xl-flex d-lg-flex d-none d-md-none d-sm-none align-items-center justify-content-center column-gap-1" onClick={() => changeLanguage(i18n.language === 'en' ? 'ar' : 'en')} style={{ cursor: 'pointer', color: 'var(--primary)' }} >
            <FontAwesomeIcon icon={faRepeat} />
            {
              i18n.language === 'en' ? <span style={{ color: 'var(--primary)' }} className="nav-link mx-2">{t('arabic')}</span> : <span style={{ color: 'var(--primary)' }} className="nav-link mx-2">{t('english')}</span>
            }
          </div>
          <button variant="primary" className='btn btn-lg px-5 my-3' onClick={() => navigate('/contacts')}>
            {t('contactUs')}
          </button>
        </section>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;