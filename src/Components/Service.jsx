import React from 'react';
import { CardBody } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslationContext } from '../translationContext';
import { useNavigate } from 'react-router';
import './service.css';

const Service = (props) => {
    const { t, i18n } = useTranslationContext(),
        navigate = useNavigate(),
        dir = i18n.language === 'en' ? ' end-0' : 'end-50',
        listAlign = i18n.language === 'en' ? ' text-start' : 'text-end';

    const handleClick = () => {
        window.scrollTo(0, 0);
        navigate(`/service/${props.title}`);
    };

    return (
        <div className="col-xl-4 col-md-6 col-sm-12 p-3">
            <section className=" card position-relative border border-0 p-2 shadow" style={{ height: props.height }}>
                <img style={{ height: '363px', width: '100%' }} className='card-img-top' src={props.img} alt={props.title} />
                <CardBody className="position-relative px-4">
                    <FontAwesomeIcon icon={props.icon} style={{ right: '15px' }}
                        className={`text-success fs-4 bg-light p-3 me-3 rounded-circle position-absolute top-0 ${dir} translate-middle-y`} />
                    <h4 style={{ color: 'var(--primary)' }} className="my-3 w-100 fw-bold">{props.title}</h4>
                    <p>{props.text}</p>
                    <ul style={{ listStyle: 'outside' }} className={listAlign}>
                        {props.list.map((ser, index) => (
                            <li className='my-2 fw-bold' key={index}>{ser}</li>
                        ))}
                    </ul>
                    <div className='position-absolute bottom-0 start-50 translate-middle-x'>
                        {props.text && <button onClick={handleClick} className='btn btn-primary px-4 py-2'>{t('seeMore')}</button>}
                    </div>

                </CardBody>
            </section>
        </div>
    );
};

export default Service;