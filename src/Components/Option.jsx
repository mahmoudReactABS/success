import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Option = ({ direction, icon, title, details }) => {
    const animationClass = direction === "r" ? "fade-left" : direction === "l" ? "fade-right" : "";

    return (
        <div data-aos-once="true" data-aos={animationClass} className="container col-xl-4 col-md-6 col-sm-6 my-5">
            <article className="border border-4 border-white rounded-4 container text-white text-center" style={{ height: '400px' }}>
                <div data-aos="zoom-in" data-aos-once="true">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-success img-fluid rounded-circle p-1 bg-white translate-middle-y" width={80} height={80} viewBox="0 -2 20 25" style={{ display: 'block', margin: 'auto' }} >
                        <path fill="#088243" d={icon}/>
                    </svg>
                </div>
                <div className="px-3">
                    <h4 className="mb-4">{title}</h4>
                    <p style={{ textAlign: 'justify' }}>{details}</p>
                </div>
            </article>
        </div>
    );
};

export default Option;
