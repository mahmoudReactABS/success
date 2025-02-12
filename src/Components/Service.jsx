import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslationContext } from '../translationContext';
import { Link, useNavigate } from 'react-router-dom';
import './service.css';

const Service = (props) => {
    const { t, i18n } = useTranslationContext(),
        navigate = useNavigate(),
        dir = i18n.language === 'en' ? 'end-0' : 'end-50',
        listAlign = i18n.language === 'en' ? 'text-start' : 'text-end';

    const handleClick = () => {
        window.scrollTo(0, 0);
        navigate(`/service/${encodeURIComponent(props.title)}`);
    };

    return (
        <section data-aos-once="true" data-aos="fade-right" className="col-xl-4 col-md-6 col-sm-12 p-3">
            <section className="card position-relative border border-0 shadow" style={{ height: props.height }}>
                <img style={{ height: '363px', minWidth: '100%' }} className='card-card-img-overlay' src={props.img} alt={props.title} />
                <article className="card-body position-relative px-4">
                    {typeof props.icon === 'string' ? (
                        <img src={props.icon} alt="icon" className={`me-3 rounded-circle position-absolute top-0 ${dir} translate-middle-y`} style={{ right: '15px', width: '60px' }} />
                    ) : (
                        <FontAwesomeIcon icon={props.icon} style={{ right: '15px' }} className={`text-success fs-4 bg-white shadow p-3 me-3 rounded-circle position-absolute top-0 ${dir} translate-middle-y`} />
                    )}
                    <h4 style={{ color: 'var(--primary)' }} className="my-3 w-100 fw-bold text-start ms-4">
                        {props.title}
                    </h4>
                    <p style={{ textAlign: 'justify' }}>{props.text}</p>
                    <ul style={{ listStyle: 'outside' }} className={listAlign}>
                        {props.list.map((ser, index) => (
                            <li key={index} className='my-2'>
                                <Link to={`/service/${encodeURIComponent(ser)}`} className='text-decoration-none text-dark' onClick={() => window.scrollTo(0, 0)} >
                                    <span className="my-2 fw-bold">{ser}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {props.text && (
                        <div className='position-absolute bottom-0 start-50 translate-middle-x p-3'>
                            <button onClick={handleClick} className='btn btn-primary px-4 py-2'>
                                {t('seeMore')}
                            </button>
                        </div>
                    )}
                </article>
            </section>
        </section>
    );
};

export default Service;