import React from 'react'
import StoryCard from './StoryCard'

const stories =[
    {
        name: "Anushtha Prakash",
        src:  "/story.jpeg",
        profile: "/about.jpg",
    },
    {
        name:"Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",

    },
    {
        name:"Jeff Bezoz",
        src: "https://links.papareact.com/k2j",
        profile: "https://rebrand.ly/66pvy3r",

    },
    {
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf",

    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",

    },
];

function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
    {stories.map((story)=>(
        <StoryCard
        key={story.src}
        name={story.name}
        src={story.src}
        profile={story.profile}
        />
    ))}

    </div>
  )
}

export default Stories