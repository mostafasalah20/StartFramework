
import React from 'react'

export default function Footer() {
  return (<>

    <footer>

      <div className="flex bg-[#2c3e50] text-white py-10">
        <div className="container mx-auto">
          <div className=" md:flex md:w-ful flex-wrap justify-around">
            <div className=" md:w-1/4  text-center mt-7 pt-7 ">
              <h2 className='text-3xl font-normal py-3'>LOCATION</h2>
              <p className='text-2xl font-extralight  py-1'> 2215 John Daniel Drive</p>
              <p className='text-2xl font-extralight'>Clark, MO 65243</p>
            </div>

            <div className=" md:w-1/4 text-center mt-7  pt-7">
              <h2 className='text-3xl font-normal py-3'>AROUND THE WEB</h2>
              <div className="icons flex justify-center">
                <div className="icon m-1 w-10 h-10 flex justify-center items-center border-2 rounded-full border-white bg-[#2c3e50]">
                  <i class="fa-brands fa-facebook-f"></i>
                </div>
                <div className="icon m-1 w-10 h-10 flex justify-center items-center border-2 rounded-full border-white bg-[#2c3e50]">
                  <i class="fa-brands fa-linkedin"></i>
                </div>

                <div className="icon m-1 w-10 h-10 flex justify-center items-center border-2 rounded-full border-white bg-[#2c3e50]">
                  <i class="fa-brands fa-twitter"></i>
                </div>

                <div className="icon m-1 w-10 h-10 flex justify-center items-center border-2 rounded-full border-white bg-[#2c3e50]">
                  <i class="fa-solid fa-globe mx-1 icon"></i>
                </div>
              </div>
            </div>

            <div className=" md:w-1/4 text-center mt-7 pt-7 ">
              <h2 className='text-3xl font-normal py-3'>ABOUT FREELANCER</h2>
              <p className='text-base font-extralight'> Freelance is a free to use, licensed Bootstrap theme created by Route</p>

            </div>
          </div>
        </div>
      </div>
    </footer>

    <div className='text-center h-16 flex items-center justify-center bg-black text-white'>
            <h2>Copyright © Your Website 2024</h2>
          </div>


  </>)
}
