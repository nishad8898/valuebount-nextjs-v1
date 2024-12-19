import { Behance, Facebook, Instagram, LinkedIn, Twitter } from './svgImages'
export const FooterData = {
  logo: '/images/logo.svg',
  logoDark: '/images/logo-light.svg',
  footerText: '',
  copyright: `${new Date().getFullYear()} Valuebound. All Rights Reserved`,
  email: 'hello@valuebound.com',
  phone: '+91 80 880 48711',
  expolre: [
    {
      id: 1,
      name: 'About',
      link: '/',
    },
    {
      id: 2,
      name: 'Capabilities',
      link: '/',
    },
    {
      id: 3,
      name: 'Development & Customization',
      link: '/',
    },
    {
      id: 4,
      name: 'Support & Maintenance',
      link: '/',
    },
    {
      id: 5,
      name: 'Migration & Upgrade',
      link: '/',
    },
    {
      id: 6,
      name: 'Drupal Audit',
      link: '/',
    },
    {
      id: 7,
      name: 'Testimonials',
      link: '/testimonial',
    },
  ],
  resources: [
    {
      id: 1,
      name: 'Blogs',
      link: '/',
    },
    {
      id: 2,
      name: 'Case Studies',
      link: '/',
    },
    {
      id: 3,
      name: 'whitepaper',
      link: '/',
    },
    {
      id: 4,
      name: 'Interviews',
      link: '/',
    },
  ],

  socialLinks: [
    {
      id: 1,
      name: <Facebook />,
      link: 'https://www.facebook.com/valuebound/',
    },
    {
      id: 2,
      name: <Twitter />,
      link: 'https://x.com/valuebound',
    },
    {
      id: 3,
      name: <LinkedIn />,
      link: 'https://www.linkedin.com/company/valuebound',
    },
    {
      id: 4,
      name: <Instagram />,
      link: 'https://www.instagram.com/valuebound',
    },
  ],
}
