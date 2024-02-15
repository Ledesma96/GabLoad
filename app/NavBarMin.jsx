"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const NavBarMin = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [menu, setMenu] = useState(false);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      // Verificar si estamos en el entorno del navegador antes de agregar/eliminar el evento de redimensionamiento
      window.addEventListener("resize", handleResize);
      setWindowWidth(window.innerWidth);
    }

    return () => {
      if (typeof window !== 'undefined') {
        // Verificar si estamos en el entorno del navegador antes de eliminar el evento de redimensionamiento
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const desplegar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    setHeight(menu ? '150px' : '0');
  }, [menu]);

  const handleClick = () => {
    setMenu(false);
  };

  const style = {
    height,
    marginTop: "10px",
    marginLeft: "-20px",
    width: menu ? '150px' : '0%',
    padding: "5px 15px",
    background: "black",
    transition: 'height 0.3s ease'
  };

  return (
    <>
      {windowWidth < 768 ? (
        <>
          {menu ? (
            <>
              <Image
                width={200}
                height={200}
                onClick={desplegar}
                className='menu'
                src="/98676 - copia.png"
                alt="icono de menu"
              />
              <div style={style}>
                <ul>
                  <li className="list__li">
                    <a className="hover:text-red-300 white" href="/" onClick={desplegar}>INICIO</a>
                  </li>
                  <li className="list__li">
                    <a className="tex-white-500 hover:text-red-300 white" href="/contact" onClick={handleClick}>CONTACTO</a>
                  </li>
                  <li className="list__li">
                    <a className="tex-white-500 hover:text-red-300 white" href="/portfolio" onClick={handleClick}>PORTFOLIO</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
              <Image
                onClick={desplegar}
                width={200}
                height={200}
                className='menu'
                src="/98676.png"
                alt=""
              />
            )}
        </>
      ) : (
          <>
            <ul className='menu__ul'>
              <a href="/"><li className='menu__ul__li'>INICIO</li></a>
              <a href="/contact"><li className='menu__ul__li'>CONTACTO</li></a>
              <a href="/portfolio"><li className='menu__ul__li'>PORTFOLIO</li></a>
            </ul>
          </>
        )}
    </>
  );
};

export default NavBarMin;
