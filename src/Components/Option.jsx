import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Option = ({ direction, icon, title, details }) => {
    const animationClass = direction === "r" ? "fade-left" : direction === "l" ? "fade-right" : "";

    return (
        <div data-aos={animationClass} className="col-xl-4 container col-md-6 col-sm-12 my-5">
            <article className="border border-4 border-white rounded-4 container text-white text-center" style={{ height: '400px' }}>
                <FontAwesomeIcon
                    data-aos="zoom-in"
                    style={{ fontSize: '40px' }}
                    className="text-success rounded-circle p-3 bg-white translate-middle-y"
                    icon={icon}
                />
                <div className="px-3">
                    <h4 className="mb-4">{title}</h4>
                    <p>{details}</p>
                </div>
            </article>
        </div>
    );
};

export default Option;
