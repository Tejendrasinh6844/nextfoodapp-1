"use client"
import React, { useState } from 'react'
import Image from "next/image"
import Link from 'next/link'

const links = [

  {id: 1, title: "Homepage",url: "/"},
  {id: 2, title: "Menu",url: "/Menu"},
  {id: 3, title: "Working Hours",url: "/"},
  {id: 4, title: "Contact",url: "/"}
]

// temprary user delete it
const user = true
const Menu = () => {
  const [open,setOpen]=useState(false)
  return (

    <div>
      {!open ? (<Image src="/open.png"  alt="" width={20} height={20} onClick={()=>{setOpen(true)}} />) :
      (<Image src="/close.png"  alt="" width={20} height={20} onClick={()=>{setOpen(false)}} />)}
<div className='bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] flex flex-col z-10 gap-8 w-full items-center justify-center text-3xl  '>
{links.map(item=>(
  <Link href={item.url} key={item.id}>{item.title}</Link>
))}
{!user ? <Link href="/login">Login</Link>:
 <Link href="/orders">Orders</Link>
}

</div>
    </div>
  )
}

export default Menu