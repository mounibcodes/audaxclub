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
  );
}
