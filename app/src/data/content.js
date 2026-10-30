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