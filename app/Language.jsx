import Image from 'next/image'
import React from 'react'

const Language = () => {
  return (
    <section className='slider  flex'>
      <div className='slideTrack'>
        <div className='slide'>
          <Image width={100} height={250} src="/HTML5_logo_and_wordmark.svg.png"  alt="icon" />
        </div>
        <div className='slide'>
          <Image width={250} height={250} src="/css3_logo_and_wordmark.svg.png"  alt="icon" />
        </div>
        <div className='slide'>
          <Image width={250} height={250} src="/Bootstrap_logo.svg.png"  alt="icon" />
        </div>
        <div className='slide'>
          <Image width={250} height={250} src="/javascript.png"  alt="icon" />
        </div>
        <div className='slide'>
          <Image width={250} height={250} src="/1631110818-logo-react-js.png"  alt="icon" />
        </div>
        <div className='slide'>
          <Image width={250} height={250} src="/next.svg"  alt="icon" />
        </div>
        <div className='slide'>
          <Image width={250} height={250} src="/nodejs-1-logo.png"  alt="icon" />
        </div>
        <div className='slide'>
          <Image width={250} height={250} src="/HTML5_logo_and_wordmark.svg.png"  alt="icon" /> 
        </div>
        <div className='slide'>
          <Image width={250} height={250} src="/css3_logo_and_wordmark.svg.png"  alt="icon" />
        </div>
        <div className='slide'>
          <Image width={250} height={250} src="/Bootstrap_logo.svg.png"  alt="icon" />
        </div>
        <div className='slide'>
          <Image width={250} height={250} src="/javascript.png"  alt="icon" />
        </div>
        <div className='slide'>
          <Image width={250} height={250} src="/1631110818-logo-react-js.png"  alt="icon" />
        </div>
        <div className='slide'>
          <Image width={250} height={250} src="/next.svg"  alt="icon" />
        </div>
        <div className='slide'>
          <Image width={250} height={250} src="/nodejs-1-logo.png"  alt="icon" />
        </div>
      </div>
    </section>
  )
}

export default Language