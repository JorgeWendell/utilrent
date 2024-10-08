import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";

const Nav = () => {
    return (
        <div className="h-[12vh] bg-white shadow-md">
            <div className="w-[85%] flex items-center justify-between mx-auto h-[12vh]">
                <h1 className="text-[16px] md:text-[25px] font-bold">
                    <span className="text-[27px] md:text-[40px] text-red-600">U</span>
                    tilrent
                </h1>
                <ul className="hidden lg:flex items-start justify-between space-x-10">
                    <NavLink />
                    <div className="flex items-center space-x-2 md:space-x-5">
                        <Bars3BottomRightIcon className="w-[1.5rem] lg:hidden md:block h-[1.5rem] text-slate-600 cursor-pointer" />
                    </div>
                    
                </ul>
            </div>
        </div>
    );
};  

export default Nav;