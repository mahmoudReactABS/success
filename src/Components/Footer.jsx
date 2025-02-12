import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '/Logo 1.png';
import { Link } from 'react-router-dom';
import { useTranslationContext } from '../translationContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const { t, i18n, changeLanguage } = useTranslationContext();

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <footer style={{ 'backgroundColor': 'var(--primary' }} className="text-white px-5">
            <div className="container px-5">
                <div className="row px-4">
                    {/* Logo and Contact Info */}
                    <div className="col-md-3 px-0 pt-5 mb-3" style={{ backgroundColor: 'var(--secondary' }}>
                        <div className="mb-2 d-flex flex-column align-items-center">
                            <img src={Logo} alt="Logo" style={{ width: '100px', height: '200px' }} />
                        </div>
                        <ul className=" list-unstyled mx-3">
                            <li className='my-2'>
                                <FontAwesomeIcon icon={faPhone} /> +202 12345678, +202 22334477
                            </li>
                            <li className='my-2'>
                                <FontAwesomeIcon icon={faLocationDot} /> {t('address')}
                            </li>
                            <li className='my-2'>
                                <FontAwesomeIcon icon={faMailBulk} /> info@sp.com.eg
                            </li>
                        </ul>
                    </div>

                    {/* Navigation Links */}
                    <div className="col-md-2 px-0 pt-5 mb-3 d-flex flex-column justify-content-center align-items-center">
                        <h5 className='text-start'>{t('page')}</h5>
                        <ul className="list-unstyled text-start ms-4">
                            <li className='my-2'><Link to='/' className="text-white" onClick={handleLinkClick}>{t('home')}</Link></li>
                            <li className='my-2'><Link to='/about' className="text-white" onClick={handleLinkClick}>{t('about')}</Link></li>
                            <li className='my-2'><Link to='/services' className="text-white" onClick={handleLinkClick}>{t('service')}</Link></li>
                            <li className='my-2'><Link to='/client' className="text-white" onClick={handleLinkClick}>{t('client')}</Link></li>
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div className="col-md-2 px-0 pt-3 mb-3 d-flex flex-column justify-content-center align-items-center">
                        <h5 className='text-start'>{t('Our_Service')}</h5>
                        <ul className="list-unstyled text-start ms-4">
                            <li className='my-2'><Link to='/services' className="text-white" onClick={handleLinkClick}>{t('auditServices')}</Link></li>
                            <li className='my-2'><Link to='/services' className="text-white" onClick={handleLinkClick}>{t('taxServices')}</Link></li>
                            <li className='my-2'><Link to='/services' className="text-white" onClick={handleLinkClick}>{t('advisoryServices')}</Link></li>
                        </ul>
                    </div>

                    {/* Map */}
                    <div className="col-md-5 px-0 pt-5 mb-3 text-center">
                        <iframe width="95%" height="300" style={{ border: 0 }} title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.609896181966!2d31.251775324941967!3d29.96189762247803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847b30725a015%3A0x279cfa82e868b549!2sSuccess%20Partners!5e0!3m2!1sar!2seg!4v1736413566366!5m2!1sar!2seg">
                        </iframe>
                        <h5>{t('follow')}</h5>
                        <div className='gap-4 d-flex justify-content-center align-items-center fs-4'>
                            <a className='fs-4 text-white' href='https://www.facebook.com/S.P.Public.Accountants.and.Consultants/'>
                                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                            </a>
                            <a className='fs-4 text-white' href='https://eg.linkedin.com/company/success_partners'>
                                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                            </a>
                            <a className='fs-4 text-white' href='https://eg.linkedin.com/company/success_partners'>
                                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                            </a>
                            <a className='fs-4 text-white' href='https://eg.linkedin.com/company/success_partners'>
                                <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="py-3 mt-3 border-top">
                    <p className="mb-0 fw-medium">
                        {t('copyRights')}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
