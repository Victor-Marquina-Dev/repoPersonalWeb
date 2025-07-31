import React from 'react'
import {words} from '../constants/index.js'
import Button from '../components/Button.jsx'
import HeroExperience from '../components/heroModels/heroExperience.jsx'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import AnimatedCounter from '../components/AnimatedCounter.jsx'


const hero = () => {
      useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });
  return (
    <section id='hero' className='relative overflow-hidden'>
    <div className='absolute top-0 left-0 z-10'>
        <img src="/images/bg.png" alt="background" />
    </div>

    <div className='hero-layout '>
    
    {/*Left: Hero content*/}
    <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Desarrollando
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1> desde diseños reales</h1>
              <h1>con enfoque funcional</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
             Hola, soy Victor, construyo soluciones web modernas con Java, Angular y Node.js. <br />
Enfocado en cloud, seguridad, automatización y buenas prácticas.
            </p>

            <Button
              text="Ver Portafolio"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

    {/*Right: 3D model */}
    <figure>
        <div className='hero-3d-layout'>
            <HeroExperience
            />
        </div>
    </figure>
    </div>
    <AnimatedCounter/>
    </section>
  ) 
}

export default hero