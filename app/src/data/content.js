import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import hero4 from '../assets/hero4.jpg';

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
        title: 'Seamless MICE', sub: 'Events Handled End to End', cta: 'Explore MICE', image: hero4
    }
];

