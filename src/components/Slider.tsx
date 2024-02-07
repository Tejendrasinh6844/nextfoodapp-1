"use client"
import Image from 'next/image'
import React,{useState,useEffect} from 'react'
const data =[
{   id:1,
    title:"always fresh & always crispy & always hot ",
    image:"/slide1.png"  
  },
{   id:2,
    title:"WE serve a hapinnes ",
    image:"/slide2.png"  
  },
{   id:3,
    title:"the best pizza to share with your family",
    image:"/slide3.jpg"  
  }

]


const Slider = () => {
  useEffect(()=>{
    const interval = setInterval(()=>setCurrentSlide((prev)=> (prev === data.length -1 ? 0 : prev + 1)),2000)
    return ()=> clearInterval(interval)
  },[])
  const [currentSlide,setCurrentSlide]= useState(0);


  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50 " >
      {/* text-container */}
      <div className="flex-1  flex items-center justify-center flex-col gap-8 text-red-500 font-bold ">
        <h1 className="text-5xl text-center md:p-10 uppercase p-4 md:text-6xl xl:text-7xl "> {data[currentSlide].title} </h1>
        <button className="bg-red-500 text-white py-4 px-8 ">Order Now</button>
      </div>

      {/* image-container */}
<div className=" w-full  relative  flex-1">
<Image src={data[currentSlide].image} fill alt="" className="object-cover"/>

</div>





    </div>
  )
}

export default Slider
