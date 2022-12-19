import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { EllipsisHorizontalIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import React from 'react'
import Contact from "./Contact"

const contacts = [
    { name: "Elon Musk", src: "https://links.papareact.com/kxk" },
    { name: "Jeff Bezoz", src: "https://rebrand.ly/66pvy3r" },
    { name: "Mark Zuckerberg", src: "https://links.papareact.com/snf" },
    { name: "Bill Gates", src: "https://links.papareact.com/zvy" },
    { name: "Harry Potter", src: "https://links.papareact.com/d0c" },
    { name: "The Queen", src: "https://links.papareact.com/6gg" },
    { name: "James Bond", src: "https://links.papareact.com/r57" },
];

function Widgets() {
    return (
        <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
            <div className='flex  justify-between items-center text-gray-500 mb-5'>
                <h2 className='text-xl font-semibold '>Contacts</h2>
                <div className='flex space-x-2'>
                    <VideoCameraIcon className='h-6' />
                    <MagnifyingGlassIcon className='h-6' />
                    <EllipsisHorizontalIcon className='h-6' />
                </div>
            </div>
           { contacts.map((contact) => (
            <Contact key={contact.src}
            src={contact.src}
            name={contact.name}/>
           )

           )}
        </div>
    )
}

export default Widgets