import react from "react";
import Image from "next/image";

const Eachpost = ({img, title, content}) => (
    <div className="w-full h-[16rem]">
        <div className="w-full h-[60%] flex flex-col justify-center items-center">
            <Image src={img} className="w-full h-full" />
        </div>
        <div className="w-full px-1">
            <span className="font-semibold mt-2 text-black text-xl">{title}</span>
            <span className="text-base mt-2 text-gray-600">{content}</span>
        </div>
    </div>
)
////////// {} 

export default Eachpost;