'use client'
import { useState } from "react";
import { workSans } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { title: "HOME", id: "home", to: '/' },
        { title: "ABOUT US", id: "hero", to: '/' },
        { title: "EVENTS", id: "events", to: '/' },
        { title: "GALLERY", id: "gallery", to: '/' }
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
            <nav className="hidden md:block sticky top-3 bg-white rounded-4xl z-[9999] w-fit m-auto mt-4 shadow-2xl border-3">
                <div className="flex items-center gap-6 py-3 px-4">
                    <Link href={'/'}>
                        <Image
                            src="/generated-image.png"
                            alt="Audax Logo"
                            width={60}
                            height={60}
                            className="rounded-2xl"
                        />
                    </Link>
                    <ul className="flex gap-6 items-center">
                        {navLinks.map((L) => (
                            <li
                                key={L.title}
                                className={`${workSans.className} font-black text-black cursor-pointer whitespace-nowrap`}
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
            <nav className="md:hidden sticky top-3 bg-white rounded-4xl z-[9999] w-fit m-auto mt-4 shadow-2xl border-3">
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
                    <div className="flex items-center gap-2">
                        {/* Dropdown Button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="p-2"
                            aria-label="Toggle menu"
                        >
                            <span className="text-3xl">&#8942;</span>
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
                </div>
                {/* Dropdown Menu */}
                {menuOpen && (
                    <ul className="flex flex-col gap-2 px-4 pb-4">
                        {navLinks.map((L) => (
                            <li
                                key={L.title}
                                className={`${workSans.className} font-black text-black text-center cursor-pointer whitespace-nowrap`}
                                onClick={() => {
                                    handleScroll(L.id);
                                    setMenuOpen(false); // close menu after click
                                }}
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
