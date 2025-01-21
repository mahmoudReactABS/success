import React from 'react'
import spons from '/Frame 473.png';

function Marquee() {
  return (
    <marquee className='pb-5' dir="ltr" scrollamount="20">
        <img src={spons} height={'100px'} />
      </marquee>
  )
}

export default Marquee
