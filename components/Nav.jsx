import react from "react";
import Image from 'next/image'
const Nav = () => (
    <nav className="bg-[#232323] w-full p-4">
        <div className="flex flex-col max-w-[86%] mx-auto justify-start items-start">
            <div className="flex gap-x-2 items-center">
                <img src="/images/logo.png" alt="" className="w-16 inline-block" />
                <span className="text-white text-lg mt-2 font-semibold">Everyday News</span>
            </div>
        </div>

    </nav>
)

export default Nav;