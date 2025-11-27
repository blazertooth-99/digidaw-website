"use client"

import { ShieldCheck } from "lucide-react"
const NavItem: string[] =
    ['Home', 'Product', 'About', 'Contact']


const Navigation = () => {
    return (
        <section>
            <nav className="fixed z-50 w-full flex items-center justify-between px-6 py-8 mx-auto animate-fade-up">
                <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
                        <div className="w-5 h-5 bg-black rounded-full absolute -right-1 -bottom-1" />
                        <div className="w-2 h-2 bg-black rounded-full absolute top-2 left-2" />
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-xl border border-white/10 px-2 py-1.5 rounded-full shadow-2xl shadow-black/50">
                    {NavItem.map((item, idx) => (
                        <a
                            key={idx}
                            href="#"
                            className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 ${idx === 0 ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-6">
                    {/* <button className="hidden lg:flex items-center gap-2 bg-[#111] hover:bg-[#222] border border-white/10 px-4 py-2 rounded-full text-xs font-medium transition-all text-gray-300 group">
                        Protection <ShieldCheck size={14} className="group-hover:text-blue-400 transition-colors" />
                    </button> */}
                    <button className="text-xs font-medium hover:text-gray-300 flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full border border-gray-600 flex items-center justify-center">
                            <span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
                        </div>
                        Create Account
                    </button>
                </div>
            </nav>
        </section>
    )
}
export default Navigation;
