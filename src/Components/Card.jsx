import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div className="col-xl-3 col-md-6  position-relative">
            <img src={props.img} alt="People" className="img-fluid mb-2" />
            <div className="position-absolute top-50 start-50 translate-middle text-dark text-center w-100">
                <h1>{props.title}</h1>
                <p className='w-100 p-3 fw-bolder'>{props.text}</p>
            </div>
        </div>
    )
}

export default Card