import React from 'react';
import Image from 'next/legacy/image';


function Header() {
  return (
    <header className='sticky top-0'>
        {/*left */}
        <div className='relative flex items-center h-10 cursor-pointer
            my-auto'>
            <Image
                src='https://links.papareact.com/qd3'
                alt=""
                layout='fill'
                objectFit='contain' // Will keep object ratio
                objectPosition='left'
            />
        </div>

        {/*middle */}
        <div></div>

        {/*right */}
        <div></div>

    </header>
  )
}

export default Header