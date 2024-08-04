

import React, { useState } from 'react'
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'
import style from './Portfolio.module.css'

export default function Portfolio() {


  let Data = [
    {
      id: 0,
      src: img1,
      alt: 'port1'
    },
    {
      id: 1,
      src: img2,
      alt: 'port2'
    },
    {
      id: 2,
      src: img3,
      alt: 'port3'
    },
    {
      id: 3,
      src: img1,
      alt: 'port1'
    },
    {
      id: 4,
      src: img2,
      alt: 'port2'
    },
    {
      id: 5,
      src: img3,
      alt: 'port3'
    },
  ]



const stop=(e)=>{
  // console.log(e);
  e.stopPropagation()
}




  const getItem = (imgesrc) => {
    // console.log(imgesrc);
    document.getElementById('img1').src = imgesrc;
    document.getElementById('box').classList.remove('hidden')
  }
  const closebox = () => {
    document.getElementById('box').classList.add('hidden')
  }

  

  return (<>

    <section  className='pt-11 '>






      <div className=" py-11 ">
        <h2 className='font-bold text-5xl pt-11  text-center text-[#2c3e50]'>conatct section</h2>
      </div>
      <div className="icon flex justify-center py-">
        <div className='w-20 h-1 bg-[#2c3e50] me-2'></div>
        <i className="fa-solid fa-star fa-xl text-[#2c3e50] "></i>
        <div className='w-20 h-1 bg-[#2c3e50] ms-2'></div>
      </div>
      <div className="container mx-auto pt-11 pb-11">
        <div className="flex flex-wrap justify-center ">


          {Data.map((item,index) => {
            return <div className="md:w-1/4 md:mx-5 my-5">
              <div onClick={() => getItem(item.src)} key={index} className='relative '>
                <img id='imgs' src={item.src} className='imgs w-full rounded-md' alt="" />
                <div className="dx absolute top-0 opacity-0 hover:opacity-100 transition-all duration-[1s]  bg-[#1abc9ce0] w-full h-full flex justify-center items-center">
                  <i className='text-center text-white fa-solid fa-plus fa-6x'></i>

                </div>
              </div>
            </div>


          })}

        </div>


      </div>


    </section>

    <div onClick={closebox} id='box'  className='bg-blue-300 bg-opacity-35 w-full h-full fixed top-[0] left-[0] z-50  w-full hidden'>

      <div className="container mx-auto  h-full ">
        <div className=" flex justify-center items-center h-full">
          <div id='contImage' onClick={stop} className="contImage  w-[500px]">
            <img id='img1' src={img2} className='w-full rounded-md' alt="" />
          </div>
        </div>
      </div>

    </div>




  </>)
}
