'use client'
import { useState } from "react";
import { workSans } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinks = [
        { title: "Home", id: "home" , to:'/' },
        { title: "About us", id: "hero", to:'/' },
        { title: "Events", id: "events", to:'/' },
        { title: "Gallery", id: "gallery", to:'/' }
    ];
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            {/* Desktop Nav */}
            <nav className="hidden md:block md:border-3 md:sticky md:top-3 md:bg-white md:rounded-4xl md:z-10 md:w-fit md:m-auto md:mt-4 md:shadow-2xl">
                <div className="md:flex md:items-center md:gap-6 md:py-3 md:px-4">
                    <Link href={'/'}>
                        <Image
                            src="/generated-image.png"
                            alt="Audax Logo"
                            width={60}
                            height={60}
                            className="hidden md:block rounded-2xl"
                        />
                    </Link>
                    <ul className="hidden md:flex md:gap-6 md:items-center">
                        {navLinks.map((L) => (
                            <li
                                className={`${workSans.className} font-black text-black cursor-pointer whitespace-nowrap`}
                                key={L.title}
                                href={L.to}
                                onClick={() => handleScroll(L.id)}

                            >
                                {L.title}
                            </li>
                        ))}
                        <Link
                            href="/joinus"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-black text-black bg-red-300 border-b-4 border-r-4 p-2 rounded-2xl transform transition-transform duration-200 hover:scale-95 active:scale-90"
                        >
                            JOIN US!
                        </Link>
                    </ul>
                </div>
            </nav>

            {/* Mobile Nav */}
            <nav className="md:hidden border-3 sticky top-3 bg-white rounded-4xl z-10 w-fit m-auto mt-4 shadow-2xl">
                <div className="flex items-center justify-between py-3 px-4">

                    <Link href={'/'}>
                        <Image
                            src="/generated-image.png"
                            alt="Audax Logo"
                            width={60}
                            height={60}
                            className="rounded-2xl"
                        />
                    </Link>
                    {/* Three Dots Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="p-2"
                        aria-label="Open menu"

                    >
                        <span className="text-3xl p-4">&#8942;</span>
                    </button>
                    <Link
                        href="/joinus"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-black text-black bg-red-300 border-b-4 border-r-4 p-2 rounded-2xl transform transition-transform duration-200 hover:scale-95 active:scale-90"
                    >
                        JOIN US!
                    </Link>
                </div>
                {/* Dropdown Menu */}
                {menuOpen && (
                    <ul className="flex flex-col gap-2 px-4 pb-4">
                        {navLinks.map((L) => (
                            <li
                                className={`${workSans.className} font-black text-black cursor-pointer whitespace-nowrap`}
                                key={L.title}
                                onClick={() => handleScroll(L.id)}

                            >
                                {L.title}
                            </li>
                        ))}

                    </ul>
                )}
            </nav>
        </>
    );
}
