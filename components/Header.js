import React from 'react'
import Image from "next/legacy/image"
import { BuildingStorefrontIcon, ChevronDownIcon, MagnifyingGlassIcon, PlayCircleIcon, ShoppingCartIcon, UsersIcon } from '@heroicons/react/24/outline'
import { HomeIcon,  Squares2X2Icon, BellIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid'
import HeaderIcon from '../components/HeaderIcon'
import {useSession,signOut} from "next-auth/react"

function header() {
    const  { data: session }= useSession();
    return (
        <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md '>
            {/* Left */}
            <div className="flex items-center" >
                <Image
                    src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
                    width={60}
                    height={40}
                    layout="fixed"
                    alt="facebook-logo" />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <MagnifyingGlassIcon className="h-6 text-gray-600" />
                    <input
                        className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
                        type="text"
                        placeholder="Search Facebook" />
                </div>
            </div>

            {/* Centre */}
            <div className='flex justify-center flex-grow '>
                <div className='flex space-x-6 md:space-x-2'>
                    <HeaderIcon Icon={HomeIcon} active />
                    <HeaderIcon Icon={UsersIcon} />
                    <HeaderIcon Icon={PlayCircleIcon} />
                    <HeaderIcon Icon={BuildingStorefrontIcon} />
                    
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    

                </div>
            </div>
            {/* Right */}
            <div className='flex items-center sm:space-x-2 justify-end'>
                {/* profile picture */}
                <Image 
                onClick={signOut}
                className="rounded-full cursor-pointer"
                src={session.user.image}
                width={40}
                height={40}
                layout="fixed"

                />
                <p className='font-semibold pr-3 whitespace-nowrap'>{session.user.name}</p>
                <Squares2X2Icon className="icon" />
                <ChatBubbleOvalLeftEllipsisIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>
        </div>
    )
}

export default header