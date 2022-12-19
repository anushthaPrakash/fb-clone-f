import React from 'react'
import Image from "next/legacy/image"

function SidebarRow({src,Icon,title,flag1,flag2,flag3}) {
  return (
    <div className='flex items-center space-x-2 p-4 hover:bg-gray-200 cursor-pointer rounded-xl '>
    { src && (
        <Image
            className='rounded-full'
            src={src}
            alt="sidebar-icon"
            width={35}
            height={35}
            layout="fixed"
        />
    )}
    {
        
        Icon && <Icon className={`h-8 w-8 ${ flag1 && "text-purple-700" } ${ flag2 && "text-orange-500" } ${ flag3 && "bg-gray-200 text-black rounded-full " } text-blue-500`}/>
    }
    <p className='hidden md:inline-flex font-medium'>{title}</p>
    </div>

  )
}

export default SidebarRow