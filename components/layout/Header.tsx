import React from 'react'
import Image from 'next/image';
import { NAVDATA } from '../../constants';

const Header: React.FC = () => {

    return (
        <header className="bg-cyan-300 text-white ">
            <div className='flex flex-wrap bg-[#34967C] border-t border-b '>
                <p>Overseas trip? Get the latest information on travel guides</p>
                <button className='text-white font-semibold bg-[#161117] rounded-[50px]'>
                    More info
                </button>
            </div>
            <div className='flex justify-between items-center p-4 border-b'>
                <div>
                    <Image src="/assets/logo.png" alt="Logo" width={100} height={50} />
                </div>
                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md space-x-4 w-full max-w-4xl">
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold">Location</label>
                        <input type="text" placeholder="Search for destination" className="text-sm text-gray-400 outline-none" />
                    </div>

                    <div className="border-l h-8"></div>

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold">Check in</label>
                        <input type="date" className="text-sm text-gray-400 outline-none" />
                    </div>

                    <div className="border-l h-8"></div>

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold">Check out</label>
                        <input type="date" className="text-sm text-gray-400 outline-none" />
                    </div>

                    <div className="border-l h-8"></div>

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold">People</label>
                        <input type="number" placeholder="Add guest" className="text-sm text-gray-400 outline-none" />
                    </div>

                    <button className="ml-auto bg-orange-400 p-3 rounded-full text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
                 <div className='rounded-[70px] bg-[#34967C]'>
                      <div>
                        <Image src="/assets/account.png" alt="User Avatar" width={50} height={50} className="rounded-full" />
                      </div>
                 </div>
            </div>
            <div className='flex justify-between items-center border-b'>
                 {
                    NAVDATA.map((item, index) => (
                        <div key={index} className='flex items-center space-x-2 p-4'>
                            <Image src={item.images} alt='logo'  width={24} height={24} />
                        </div>
                    ))
                 } 
            </div>
        </header>
    )
}

export default Header;