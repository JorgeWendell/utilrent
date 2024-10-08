import Image from "next/image";
import React from "react";

interface Props {
    title: string;
    image: string;
    text: string;
}

const FeatureCard = ({title, image, text}: Props) => {
    return (
        <div className="text-center bg-gray-100 p-4 rounded-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
            <Image src={image} alt={title} width={250} height={250} className="mx-auto"/>
            <h1 className="text-[20px] mt-[1.4rem] font-[500] text-[#02073e]">{title}</h1>
            <p className="mt-[1rem] text-black opacity-90 text-[15px]">{text}</p>
            <p className="mt-[1.4rem] text-red-500 font-[500] cursor-pointer hover:text-red-800">Saiba Mais</p>
        </div>
    )

}

export default FeatureCard;