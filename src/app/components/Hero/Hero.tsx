import React from "react";
import Retroescavadeira from "../../../../public/images/retroescavadeira.png";
import Image from "next/image";
import ButtonBlue from "../Button/ButtonBlue";

const Hero = () => {
    return (
        <div className="h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto">
                <div className="col-span-2">
                    <h1 className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1.5rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]">O equipamento certo pelo tempo que você precisa</h1>
                    <p className="md:text-[17px] text-[15px] mb-[1rem] text-black opacity-90 font-[400]">Nossos modelos e processos de locação atendem aos interesses do cliente, seja para um projeto de longo prazo ou para períodos menores. </p>                    
                    <p className="md:text-[17px] text-[15px] mb-[1rem] text-black opacity-90 font-[400]">Sua máquina disponível no tempo que você precisa, com padrão de manutenção Utilrent</p>  
                    <ButtonBlue text="Faça uma Cotação" />                  
                </div>
                <div className="col-span-3 hidden sm:block">
                    <Image src={Retroescavadeira} alt="Retroescavadeira" />
                </div>
            </div>
        </div>
    )

}

export default Hero;
        