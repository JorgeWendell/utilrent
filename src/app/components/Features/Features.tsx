import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import FeatureCard from "./FeatureCard";
import escavadeira from "../../../../public/images/escavadeira.jpg";
import mercedes4144 from "../../../../public/images/mercedes4144.jpg";
import minica from "../../../../public/images/minica.jpg";
import pas from "../../../../public/images/pas.jpg";
import tratores from "../../../../public/images/tratores.jpg";
import tratoresteira from "../../../../public/images/tratoresteira.jpg";

const Features = () => {
    return (
    <div className="pt-[1rem] pb-[2rem]">
       <SectionHeading 
            headingMini="Equipamentos ideais para você" 
            headingPrimary="Juntos contruimos o Futuro" 
        />
        <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[1.4rem]">
            <div>
                <FeatureCard title="Escavadeira" image={escavadeira.src} text="Escavadeiras de 11t a 48t. Performance e qualidade ideais para operações mineração, infraestrutura, saneamento, drenagem de canais e construção civil geral." />
            </div>
            <div>
                <FeatureCard title="Caminhões" image={mercedes4144.src} text="Escavadeiras de 11t a 48t. Performance e qualidade ideais para operações mineração, infraestrutura, saneamento, drenagem de canais e construção civil geral." />
            </div>
            <div>
                <FeatureCard title="Mini Escavadeira" image={minica.src} text="Escavadeiras de 11t a 48t. Performance e qualidade ideais para operações mineração, infraestrutura, saneamento, drenagem de canais e construção civil geral." />
            </div>
            <div>
                <FeatureCard title="Pás Carregadeiras" image={pas.src} text="Escavadeiras de 11t a 48t. Performance e qualidade ideais para operações mineração, infraestrutura, saneamento, drenagem de canais e construção civil geral." />
            </div>
            <div>
                <FeatureCard title="Tratores de Rodas" image={tratores.src} text="Escavadeiras de 11t a 48t. Performance e qualidade ideais para operações mineração, infraestrutura, saneamento, drenagem de canais e construção civil geral." />
            </div>
            <div>
                <FeatureCard title="Trator Esteira" image={tratoresteira.src} text="Escavadeiras de 11t a 48t. Performance e qualidade ideais para operações mineração, infraestrutura, saneamento, drenagem de canais e construção civil geral." />
            </div>
        </div>
    </div>
);
};  

export default Features;