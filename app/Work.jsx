"use client"
import Image from 'next/image'
import React from 'react'
const works = [
                { id: 4, name: "Bera Positivo", category: "e-commerce", image: "/Reg Hindley.png", url: "https://www.beramassillones.com", fecha:"9 de febrero del 2023" },
                {id:3, url:"https://cantinero.vercel.app/#/",image:"/cantineromook.jpg",fecha:"22 de diciembre del 2023"},
                {id:2, url:"https://www.cook4souls.com", image:"/c4sMock.jpg", fecha:"19 de noviembre del 2023"},
                {id:1, url: "https://www.itanflor.com/", image:"/Reg Hindley.jpg", fecha:"19 de octubre del 2023"}
                ]

const Work = () => {
  return (
    <>
        <section className='works'>
            {works.map((work) => {
                return(
                <div className='works__' key={work.id}>
                    <div className='works__div'>
                        <Image className='works__div__img'  src={"/logo(3).png"} width={70} height={70} alt="logo de gabload" />
                        <aside className='works___div__aside'>
                        <div className='works___div__aside__div'>
                            <h3 className='works___div__aside__div__h3'>GabLoad</h3>
                            <Image width={30} height={25} src={"/Twitter-Verified-Badge-PNG-Transparent-Image.png"} alt="Loogo de verificado" />
                            <p className='works___div__aside__div__p'>{work.fecha}</p>
                        </div>
                        <p className='works___div__aside__p'>Trabajo para <a href={work.url} target="blank" rel="noreferrer"><span className='span'>{work.url}</span></a></p>
                        </aside>
                    </div>
                    <Image width={200} height={200} className='work__img' src={work.image} alt="mokup de vistas en diferentes dispositivos(celular, tablet, pc)" />
                </div >
                )
            })}
            
        </section>
    </>
  )
}

export default Work