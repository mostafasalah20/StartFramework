import imgs from "../../assets/avataaars.svg"

import React from 'react'

export default function Home() {
    return (<>
        <section className="bg-[#1abc9c] text-white pt-11 pb-11">
            <div className="container pt-11 mx-auto flex justify-center items-center flex-col">
                <div className="image pt-11 pb-11 w-1/2 md:w-[20%] flex justify-center items-center flex-col">
                    <img src={imgs} className='w-full' alt="" />
                </div>

                <div className=" py-7 flex  justify-center items-center ">
                        <h2 className='font-bold text-4xl  text-center'>start Framework</h2>
                    </div>
                    <div className="icon flex justify-center">
                        <div className='w-20 h-1 bg-white me-2'></div>
                        <i class="fa-solid fa-star fa-xl"></i>
                        <div className='w-20 h-1 bg-white ms-2'></div>
                    </div>
                    <p className="mt-5 text-center">Graphic Artist - Web Designer - Illustrator</p>

            </div>
        </section>


    </>)
}
