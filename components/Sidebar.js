import { ChevronDownIcon, ClockIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon, BuildingStorefrontIcon, CommandLineIcon, UserGroupIcon, FlagIcon, PlayIcon, UsersIcon } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react'
import React from 'react'
import SidebarRow from "./SidebarRow"

function Sidebar() {
  const  { data: session }= useSession();
  return (


    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px] border-b-2 '>
      <SidebarRow
        src={session.user.image}
        title={session.user.name} />
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={CommandLineIcon} title="Most recent" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={BuildingStorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={PlayIcon} title="Watch" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={BookmarkIcon} title="Saved" flag1={true} />
      <SidebarRow Icon={FlagIcon} title="Pages" flag2={true} />
      <SidebarRow Icon={ChevronDownIcon} title="See more" flag3={true} />

    </div>
  );
}

export default Sidebar