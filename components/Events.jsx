"use client";
import Image from "next/image";

// Optional: tiny blurred versions for smooth loading


export default function Events() {
    const events = [
        {
            title: "World Tour",
            date: "February 2025",
            description: "A symbolic journey across Turkey, Mexico, Japan, China, Palestine, Brazil, Italy, and Russia, celebrating diversity, culture, and unique experiences.",
            image: "/audax/img5.jpg",
        },
        {
            title: "Trip to Tikedja",
            date: "February 2025",
            description: "A mountain trip to enjoy nature and strengthen the bonds between members.",
            image: "/audax/img1.jpg",
        },
        {
            title: "Saddle Up — Sidi Rached, Tipaza",
            date: "December 2024",
            description: "A memorable horse riding event organized by Audax Club in Sidi Rached, Tipaza. Members enjoyed outdoor activities, bonding, and adventure.",
            image: "/audax/img4.jpeg",
        },
        {
            title: "Ramadan Iftar",
            date: "March 2024",
            description: "A moment of sharing and togetherness around an iftar organized by the club.",
            image: "/audax/ramadane2.webp",
        },
        {
            title: "Festidax",
            date: "November 2024",
            description: "A fun-filled day with games, activities, music, and a film screening. Get ready for unforgettable moments! 💫",
            image: "/img5.png",
        },
    ];

    return (
        <section id="events" className="bg-striped w-full min-h-screen bg-white py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Past Events</h2>
                <p className="text-lg text-gray-600">
                    Take a look at the highlights we shared together: trips, iftar gatherings, workshops, and music nights.
                </p>
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {events.map((event, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-50 z-9 border-4 rounded-2xl shadow-white shadow-2xl overflow-hidden hover:shadow-2xl hover:shadow-black  transition-shadow duration-300"
                    >
                        <div className="relative w-full h-56">
                            <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                className="object-cover"
                                quality={75}                                  // reduces file size
                                priority={idx < 2}                             // first 2 images load faster
                            />
                        </div>
                        <div className="p-6 text-left">
                            <h3 className="text-2xl font-bold uppercase mb-2">{event.title}</h3>
                            <p className="text-sm text-gray-500 mb-4">{event.date}</p>
                            <p className="text-gray-700">{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
