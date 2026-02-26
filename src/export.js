import pakg1 from "./assets/packages1.webp";
import pakg2 from "./assets/packages2.webp";
import pakg3 from "./assets/packages3.webp";
import pakg4 from "./assets/packages4.webp";
import pakg5 from "./assets/packages5.webp";
import pakg6 from "./assets/packages6.webp";
import { FaBox } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

export const tourpackages = [
    {
        name: "Thailand Temples & Beach Getaway",
        about:
            "Discover the perfect blend of sacred temples and serene beaches on an unforgettable Thailand getaway.",
        btn: "View Tour Detail",
        price: "$299",
        days: "4D/3N",
        pax: "7",
        image: pakg1,
    },
    {
        name: "Swiss Alps & Scenic Train Journey",
        about:
            "Experience breathtaking Alpine landscapes and unforgettable panoramic views on a scenic Swiss train journey.",
        btn: "View Tour Detail",
        price: "$199",
        days: "2D/4N",
        pax: "10",
        image: pakg2,
    },
    {
        name: "New York & Las Vegas City Escape",
        about:
            "Experience the dazzling lights of Las Vegas and the iconic skyline of New York on an unforgettable city escape.",
        btn: "View Tour Detail",
        price: "$399",
        days: "7D/4N",
        pax: "12",
        image: pakg3,
    },
    {
        name: "Australia Wildlife & Reef Adventure",
        about:
            "Discover Australia’s unique wildlife and dive into the vibrant beauty of the Great Barrier Reef on an epic adventure.",
        btn: "View Tour Detail",
        price: "$499",
        days: "8D/2N",
        pax: "14",
        image: pakg4,
    },
    {
        name: "Iceland Northern Lights Discovery",
        about:
            "Witness the magical dance of the Northern Lights across Iceland’s breathtaking winter landscapes.",
        btn: "View Tour Detail",
        price: "$599",
        days: "1D/2N",
        pax: "3",
        image: pakg5,
    },
    {
        name: "Egypt Pyramids & Nile Cruise Tour",
        about:
            "Explore the timeless Pyramids of Egypt and sail the legendary Nile on an unforgettable journey through ancient history.",
        btn: "View Tour Detail",
        price: "$279",
        days: "9D/3N",
        pax: "13",
        image: pakg6,
    },
];

export const features = [
    {
        icon: FaBox,
        name: "Professional Tour Guide",
        about:
            "Enjoy expert guidance and insightful stories from a professional tour guide throughout your journey.",
    },
    {
        icon: RiVerifiedBadgeFill,
        name: "Certified Travel Agency",
        about:
            "Travel with confidence knowing your journey is planned by a certified and trusted travel agency.",
    },
    {
        icon: BiSupport,
        name: "24/7 Premium Support",
        about:
            "Experience round-the-clock assistance with our dedicated 24/7 premium support for a smooth and stress-free journey",
    },
];
