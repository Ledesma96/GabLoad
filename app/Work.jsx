import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <>
        <section className='works'>
            <div className='works__div'>
                <Image className='works__div__img'  src="/logo(3).png" width={70} height={70} alt="logo de gabload" />
                <aside className='works___div__aside'>
                    <div className='works___div__aside__div'>
                        <h3 className='works___div__aside__div__h3'>GabLoad</h3>
                        <Image width={30} height={25} src="/Twitter-Verified-Badge-PNG-Transparent-Image.png" alt="Loogo de verificado" />
                        <p className='works___div__aside__div__p'>19 de junio del 2023</p>
                    </div>
                    <p className='works___div__aside__p'>Trabajo para <a href='https://www.itanflor.com/' target="blank" rel="noreferrer"><span className='span'>www.itanflor.com</span></a></p>
                </aside>
            </div>
            <Image width={200} height={200} className='work__img' src="/Reg Hindley.jpg" alt="mokup de visstas en diferentes dispositivos(celular, tablet, pc)" />
        </section>
    </>
  )
}

export default Work