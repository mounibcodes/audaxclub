import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaFacebook, FaTiktok, Famail } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import PrivacyPolicyAudax from '@/app/privacayplolicy/page';

export default function Foot() {
  const footerLinks = [
    { title: "About us", href: "https://ensta.edu.dz/category/activites-culturelles-sportives-et-scientifiques/clubs-culturels-fr/audax-club-fr-fr/" },
    { title: "Contact us", href: "/" },
    { title: "Privacy Policy", href: "/privacayplolicy" },
  ];
  const icons = [
    { icon: <FaInstagram />, href: "https://www.instagram.com/audax.ensta/" },
    { icon: <FaTiktok />, href: "https://www.tiktok.com/@audax.ensta" },
    { icon: <FaFacebook />, href: "https://web.facebook.com/profile.php?id=100080218060469&_rdc=1&_rdr" },
    { icon: <MdEmail />, href: "mailto:audax@ensta.edu.dz" }
  ];

  return (
    <>
      <div className='border-black border-t-8 flex justify-between'>
        <div className='flex flex-row justify-center items-center'>
          <Image
            src="/generated-image.png"
            alt='AUDAX ENSTA'
            width={200}
            height={200} />
          <h1 className='text-black text-4xl font-black gap-4'>AUDAX ENSTA</h1>
        </div>
        <div className='hidden md:block md:p-8'>
          <h1 className='font-black mt-10 text-3xl text-center '>“Share culture, build friendships, <br />  celebrate diversity!”</h1>
        </div>
      </div>

      <div className=' md:hidden md:p-8'>
        <h1 className='font-black p-4 text-2xl text-center '>Share culture, build friendships, <br />  celebrate diversity!”</h1>
      </div>

      <div className=' md:hidden md:justify-between'>
        <ul className="flex flex-row gap-3 p-8  text-center ">
          {footerLinks.map((e) => (
            <li key={e.title}>
              <Link href={e.href} className="hover:underline">
                {e.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className=" flex flex-row items-center justify-center md:hidden md:mr-30 md:mt-14">
          {icons.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className='p-4 '
            >
              <span className="text-4xl  text-black">{item.icon}</span>
            </a>
          ))}
        </div>









        <div className="hidden md:flex md:mr-30 md:mt-14">
          {icons.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className='p-4 '
            >
              <span className="text-4xl  text-black">{item.icon}</span>
            </a>
          ))}
        </div>
      </div>


      <div className='hidden md:flex md:justify-between'>
        <ul className="flex flex-row gap-6 p-16 text-2xl">
          {footerLinks.map((e) => (
            <li key={e.title}>
              <Link href={e.href} className="hover:underline">
                {e.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex md:mr-30 md:mt-14">
          {icons.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className='p-4 '
            >
              <span className="text-4xl  text-black">{item.icon}</span>
            </a>
          ))}
        </div>
      </div>

      <div className=" mt-6 py-4">
        <p className="text-center  text-black">
          © 2025 AUDAX ENSTA . All rights reserved.
        </p>
      </div>
      <div className="text-center p-4 text-sm font-light">
        Powered by{" "}
        <Link
          href="https://www.linkedin.com/in/mounib-mammeri"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-black  hover:underline"
        >
          Mounib
        </Link>
      </div>

    </>

  )
}
