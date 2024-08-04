

import React from 'react'

export default function About() {
  return (<>
    <div className="about bg-[#1abc9c] text-white py-20 ">

      <div className=" py-8">
        <h2 className='font-bold text-4xl   md:text-5xl pt-8 text-center'>about component</h2>
      </div>
      <div className="icon flex justify-center py-">
        <div className='w-20 h-1 bg-white me-2'></div>
        <i class="fa-solid fa-star fa-xl"></i>
        <div className='w-20 h-1 bg-white ms-2'></div>
      </div>



      <div className="container mx-auto py-8 ">


        <div className="flex text-base flex-wrap w-4/5 mx-auto py-5">

          <div className="flex  md:w-1/2 py-3 px-3">
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes the
              complete source files including HTML,
              CSS, and JavaScript as well as optional SASS stylesheets for easy customization
            </p>
          </div>


          <div className="flex md:w-1/2 py-3 px-3">
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes the
              complete source files including HTML,
              CSS, and JavaScript as well as optional SASS stylesheets for easy customization
            </p>
          </div>

        </div>



      </div>
    </div>

  </>)
}
