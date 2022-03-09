import react from "react";
import Image from "next/image";

const Eachpost = ({img, title, content}) => (
    <div className="w-full">
        <div className="w-full flex flex-col justify-center items-center">
            <img src={img} className="w-full" />
        </div>
        <div className="w-full">
            <span className="font-semibold mt-4 block text-black text-xl">{title}</span>
            <span className="text-base pt-4 text-gray-600">{content}</span>
        </div>
    </div>
)
////////// {} 

export default Eachpost;