import { workSans } from "@/app/layout";
import Image from "next/image";

export default function Nav() {
  const navLinks = [
    { title: "Home" },
    { title: "About Us" },
    { title: "Events" },
    { title: "Gallery" },
    { title: "Join Us" },
    { title: "Contact" },
  ];

  return (
    <nav className="hidden md:block md:sticky md:top-3 md:z-10 md:w-2/3 md:m-auto md:mt-4">
      <div className="bg-white rounded-4xl border shadow-2xl flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/generated-image.png"
            alt="Audax Logo"
            width={60}
            height={60}
            className="rounded-2xl"
          />
        </div>

        {/* Nav links */}
        <ul className="flex space-x-6">
          {navLinks.map((L) => (
            <li
              className={`${workSans.className} font-black text-black cursor-pointer`}
              key={L.title}
            >
              {L.title}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
