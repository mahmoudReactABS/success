import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="card position-relative border border-0">
            <img src={props.img} alt={props.title} className="img-fluid mb-2" />
            <div className="card-content position-absolute top-50 start-50 translate-middle text-dark text-center w-100">
                <h1>{props.title}</h1>
                <p style={{ textAlign: 'justify' }} className='w-100 p-3 fw-bolder'>{props.text}</p>
            </div>
        </div>
    );
};

export default Card;