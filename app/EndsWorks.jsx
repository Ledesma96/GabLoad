import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EndsWorks = () => {
  return (
    <aside className='endsWorks'>
      <Link href="https://www.itanflor.com/" passHref target='blank' rel="noreferrer">
        <h2 className='endsWorks__h2'>Últimos trabajos</h2>
        <div className='endsworks__div'>
            <Image className='endesworks__div__img'  src="/logo(3).png" width={200} height={200} alt="logo de gabload" />
                <aside className='endesworks___div__aside'>
                    <div className='endesworks___div__aside__div'>
                        <h3 className='endesworks___div__aside__div__h3'>GabLoad</h3>
                        <Image className='endesworks___div__aside__div__img' width={200} height={200}  src="/Twitter-Verified-Badge-PNG-Transparent-Image.png" alt="Loogo de verificado" />
                        <p className='endesworks___div__aside__div__p'>19 de junio del 2023</p>
                    </div>
                    <p className='endesworks___div__aside__p'>Trabajo para <span className='endesworks__span'>www.itanflor.com</span></p>
                </aside>
        </div>
        <Image width={200} height={200} className='endeswork__img' src="/Reg Hindley.jpg" alt="mokup de visstas en diferentes dispositivos(celular, tablet, pc)" />
      </Link>
    </aside>
  )
}

export default EndsWorks