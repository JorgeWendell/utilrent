import Image from "next/image";
import React from "react";
import escav from "../../../../public/images/escav.jpg"

const Consultor = () => {
    return (
        <div className="pt-[5rem] pb-[3rem]">
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[5rem] items-center">
                <div className="order-2 lg:order-1">
                    <Image src={escav} alt="escavadeira" />
                </div>
                <div className="order-1 lg:order-2">
                    <h1 className="text-[20px] md:text-[25px] lg:text-[28px] text-[#02073e] font-bold leading-[2rem] md:leading-[3rem]">
                        Soluções para operações contínuas e de longo prazo
                    </h1>
                    <p className="mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[15px] md:text-[16px] lg:text-[17px] font-semibold">
                        Desenvolvimento de projetos e gestão de operações com máqiunas, equipamentos e um time que faz a diferença. Soluções customizadas para a necessidade de todos os segmentos, inclusive da alta complexidade.
                    </p>
                    <p className="mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[15px] md:text-[16px] lg:text-[17px]">
                        Mobilização e gestão de uma enorme equipe de mecânicos, operadores, encarregados e engenheiros.
                    </p>
                </div>

            </div>
        </div>
    )
};

export default Consultor;