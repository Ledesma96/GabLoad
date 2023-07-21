import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const works = [{id:2, url:"https://www.cook4souls.com", image:"/c4sMock.jpg", fecha:"19 de julio del 2023"},
                {id:1,url: "https://www.itanflor.com/", image:"/Reg Hindley.jpg", fecha:"19 de junio del 2023"}
                ]

const EndsWorks = () => {
  return (
    <aside className='endsWorks'>
        <h2 className='endsWorks__h2'>Últimos trabajos</h2>
        {works.map((work) => {
        return(
          <Link href={work.url} passHref target='blank' rel="noreferrer">
            <div className='endsworks__div'>
              <Image className='endesworks__div__img'  src="/logo(3).png" width={200} height={200} alt="logo de gabload" />
                <aside className='endesworks___div__aside'>
                  <div className='endesworks___div__aside__div'>
                    <h3 className='endesworks___div__aside__div__h3'>GabLoad</h3>
                    <Image className='endesworks___div__aside__div__img' width={200} height={200}  src="/Twitter-Verified-Badge-PNG-Transparent-Image.png" alt="Loogo de verificado" />
                    <p className='endesworks___div__aside__div__p'>{work.fecha}</p>
                  </div>
                  <p className='endesworks___div__aside__p'>Trabajo para <span className='endesworks__span'>{work.url}</span></p>
                </aside>
            </div>
            <Image width={200} height={200} className='endeswork__img' src={work.image} alt="mokup de visstas en diferentes dispositivos(celular, tablet, pc)" />
          </Link>
        )
        })}
        
        
      
    </aside>
  )
}

export default EndsWorks