"use client"

import Image from "next/image"
import DigidawLogo from "@/app/images/digidaw_logo.png"

const NavItem: string[] =
    ['Home', 'Product', 'About', 'Contact']



const Navigation = () => {
    return (
        <section>
            <nav className="fixed z-50 w-full flex items-center justify-between px-6 py-8 mx-auto animate-fade-up">
                <div className="flex w-[120px] md:w-[180px] h-[100px]items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <Image 
                    src={DigidawLogo}
                    alt="Digidaw Fashion"
                    className="object-cover"
                    
                    />
                </div>

                <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-xl border border-white/10 px-2 py-1.5 rounded-full shadow-2xl shadow-black/50">
                    {NavItem.map((item, idx) => (
                        <a
                            key={idx}
                            href="#"
                            className={`px-5 py-2 rounded-full text-base font-medium transition-all duration-300 ${idx === 0 ? 'bg-white/10 text-rose-400' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-6">
                    <button className="text-base text-rose-600 font-medium hover:text-rose-400 flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full border border-rose-600 flex items-center justify-center">
                            <span className="block w-2 h-2 bg-rose-300 rounded-full"></span>
                        </div>
                        Create Account
                    </button>
                </div>
            </nav>
        </section>
    )
}
export default Navigation;
