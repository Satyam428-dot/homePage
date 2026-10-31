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

import stRegis from "../assets/part1.jpg";
import jwMarriott from "../assets/part2.jpg";
import hampton from "../assets/part3.png";
import canopy from "../assets/part4.avif";
import raffles from "../assets/part5.png";
import fairmont from "../assets/part6.png";

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
  { title: 'Transportation Service', desc: 'Specialized fleet management solutions for safe, reliable, and comfortable daily commute of your workplace.', image: transportation },
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

export const partners = [
  { name: "ST. REGIS", logo: stRegis },
  { name: "JW MARRIOTT", logo: jwMarriott },
  { name: "Hampton", logo: hampton },
  { name: "canopy", logo: canopy },
  { name: "RAFFLES", logo: raffles },
  { name: "Fairmont", logo: fairmont },
];

export const faqs = [
  {
    q: 'What types of car rental services does Rental Business offer?',
    a: 'We provide corporate car rentals, employee transportation, airport transfers, outstation travel, and customized vehicle rental solutions for businesses.',
  },
  {
    q: 'Is employee transportation available 24/7?',
    a: 'Yes, our employee transportation services operate round-the-clock to support day shifts, night shifts, and flexible working hours. Door-to-door transportation and female escorts can also be arranged based on client requirements.',
  },
  {
    q: 'How can I book a corporate rental vehicle?',
    a: 'You can contact our team through the website or reach out to our support team with your travel dates, pickup location, destination, and vehicle requirements.',
  },
  {
    q: 'How much advance notice is required for a booking?',
    a: 'Local bookings may be arranged with a few hours’ notice, subject to vehicle availability. For airport transfers, outstation trips, and multiple-vehicle requirements, advance booking is recommended.',
  },
  {
    q: 'Can I modify or cancel my car rental booking?',
    a: 'Yes, booking modifications and cancellations are supported according to the agreed booking terms. Contact our team or your dedicated account manager for assistance.',
  },
  {
    q: 'What is included in the corporate car rental price?',
    a: 'Rental pricing depends on the vehicle type, duration, distance, and service requirements. Your quotation clearly mentions included services and any additional charges such as tolls, parking, or extra kilometres.',
  },
  {
    q: 'Are chauffeurs trained and verified?',
    a: 'We focus on providing professional, trained, and verified chauffeurs to support safe, comfortable, and reliable corporate travel.',
  },
  {
    q: 'What happens if a vehicle breaks down during the journey?',
    a: 'Our support team assists in coordinating a replacement vehicle or alternative travel arrangements to minimize disruption to your journey.',
  },
  {
    q: 'Does Rental Business provide hotel accommodation services?',
    a: 'Yes, we support corporate hotel accommodation, meetings, incentives, conferences, and events, helping businesses coordinate their travel and event requirements.',
  },
  {
    q: 'Can Rental Business manage transportation for large corporate events?',
    a: 'Yes, we can coordinate transportation requirements for corporate meetings, conferences, events, and group travel based on the number of passengers and event schedule.',
  },
  {
    q: 'Do you provide both corporate and leisure travel services?',
    a: 'Our primary focus is corporate travel, but we also support leisure trips, employee outings, and incentive travel requirements.',
  },
  {
    q: 'How can my company get a customized rental quotation?',
    a: 'Share your company’s travel requirements, including locations, vehicle types, number of employees, and travel frequency. Our team can help prepare a customized quotation.',
  },
];
