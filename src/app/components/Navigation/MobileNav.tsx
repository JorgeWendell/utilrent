import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

const MobileNav = () => {
    return (
    <div className="transform transition-all duration-200 fixed top-0 left-0z-[200] h-[100vh] right-0 bottom-0 bg-[#6d096b]">
        <XMarkIcon className="w-[2rem] h-[2rem] absolute top-[2rem] text-white z-[202] right-[2rem]"/>
    </div>
    );
};  
export default MobileNav;
