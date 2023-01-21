import React from 'react';
import Image from 'next/legacy/image';

function Header() {
  return (
    <header>
        {/*left */}
        <div className="relative flex items-center h-10 cursor-pointer">
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