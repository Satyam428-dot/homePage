import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpeg';
import hero3 from '../assets/hero3.jpg';
import hero4 from '../assets/hero4.jpg';

import eveready from '../assets/client1.jpg';
import crisil from '../assets/client2.jpg';
import marico from '../assets/client3.png';
import godrej from '../assets/client4.jpg';
import cipla from '../assets/client5.png';

import carRental from '../assets/hero1.jpg';
import transportation from '../assets/hero2.jpeg';
import accommodation from '../assets/hero3.jpg';
import events from '../assets/hero4.jpg';

//Navlinks
export const navLinks = [
    {
        label: "Home",href: "#home"
    },
    {
        label: "About Us",href: "#about", children: ['Achievements','Leadership','Team']
    },
    {
        label: 'Services', href: '#services', children: ['Car Rental','Transportation','Accommodation','Motel Rental']
    },
    {
        label: 'Career', href: '#career', children: ['Job Openings','Internship','Freelancing']
    },
    {
        label: 'Media', href: '#media', children: ['Gallery','Videos','Press Release']
    },
    {
        label: 'Contact Us', href: '#contact'
    },
];

export const footer = {
  quickLinks: ['Car Rental', 'Transportation', 'Accommodation', 'Motel Rental', 'Events'],
  email: 'info@business.com',
  phone: '+91 9591775553',
  offices: [
    { 
        name: 'Mumbai Office', address: '115, Opposite to Passport Office, Waghle Estate,Thane West, Mumbai- 400313 Maharashtra, India' 
    },
    { 
        name: 'Bangalore Office', address: '905, Rameshwaram Building, Donald Road, Kempapura, Hebbal. Bangalore- 560024 Karnataka, India' 
    },
  ],
  stats: [
    { 
        value: '1000+', label: 'clients' 
    },
    { 
        value: '250+', label: 'cities · car rental network' 
    },
    { 
        value: '1000000+', label: 'hotel inventory' 
    },
    { 
        value: '56+', label: 'countries · event network' 
    },
  ],
  social: ['Facebook', 'Instagram', 'LinkedIn', 'X', 'YouTube'],
};

export const heroSlides = [
    {
        title: 'Executive Rides', sub: 'For smarter workDay',cta: 'Explore the luxury', image: hero1
    },
    {
        title: 'Transportation', sub: 'Safe Commutes, Every Shift', cta: 'Explore Transportation', image: hero2
    },
    {
        title: 'Global Stays', sub: 'Hotels Wherever Work Takes You', cta: 'Explore Accommodation', image: hero3
    },
    {
        title: 'Seamless', sub: 'Events Handled End to End', cta: 'Explore', image: hero4
    }
];

export const clients = [
  { name: 'Eveready', logo: eveready },
  { name: 'CRISIL', logo: crisil },
  { name: 'Marico', logo: marico },
  { name: 'Godrej', logo: godrej },
  { name: 'Cipla', logo: cipla },
];

export const services = [
  { title: 'Car Rentals', image: carRental },
  { title: 'Transportation Service', desc: 'Specialized fleet management solutions for safe, reliable, and comfortable daily commute of your workplace.', featured: true, image: transportation },
  { title: 'Global Hotel Accommodation', image: accommodation },
  { title: 'Meetings, Incentives, Conferences, Events', image: events },
];

export const reasons = [
  {
    title: "Reliability",
    desc: "Business class vehicles with assured uptime nationwide.",
    image: carRental,
  },
  {
    title: "Verified Chauffeurs",
    desc: "Verified, trained drivers for every 'Corporate Ready' ride.",
    image: transportation,
  },
  {
    title: "Real-Time Tracking",
    desc: "24/7 support & dedicated managers to keep your business moving.",
    image: carRental,
  },
  {
    title: "No Hidden Charges",
    desc: "Clear, upfront costs for complete corporate travel transparency.",
    image: accommodation,
  },
  {
    title: "24x7 Support",
    desc: "Live tracking, updates, and route optimization for total control.",
    image: transportation,
  },
];

export const trust = {
  title: ['Your Trusted Partner,', 'in Corporate Travel Solutions'],
  points: [
    'From everyday employee commutes to important business journeys, Rental Business delivers reliable, comfortable, and seamless travel solutions.',
    'Over 2,00,000 car-booking transactions handled annually - reflecting the scale and trust we’ve earned across clients.',
  ],
  image: carRental,
};

export const stories = [
  {
  brand: "Flipkart",
  text: "Working with Rental Business has been a seamless experience. Their reliable transportation services, professional team, and well-organized travel arrangements make business trips comfortable and hassle-free. We truly appreciate their commitment to quality and timely service.",
  name: "Corporate Travel Manager",
  role: "Flipkart",
  },
  {
  brand: "Zee",
  text: "Rental Business has consistently delivered excellent transportation and travel management services. Their professional approach, reliable support, and well-coordinated arrangements have made our corporate travel experience smooth, comfortable, and efficient.",
  name: "Corporate Administration Manager",
  role: "Zee Entertainment",
  },
  {
  brand: "HDFC ERGO",
  text: "Rental Business has provided exceptional corporate transportation and travel management services. Their commitment to punctuality, passenger comfort, and professional service has made our employee travel arrangements smooth, reliable, and hassle-free.",
  name: "Corporate Travel Manager",
  role: "HDFC ERGO",
  },
];

export const storyLogos = ["Flipkart","TATA MOTORS","Zee","Union Mutual Fund","HDFC ERGO","Investec"];


