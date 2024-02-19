/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
    domains: ['i.ibb.co'],
    loader: 'default', // Use the default image loader
  },
  async generateStaticParams() {
    // Define the static paths to pre-render
    return {
      '/': { page: '/' },
      '/about': { page: '/about.html' },
      '/cyber-information': { page: '/cyber-information.html' },
      '/software-development': { page: '/software-development.html' },
      '/Technology-consulting': { page: '/Technology-consulting.html' },
      '/product': { page: '/product.html' },
      '/career': { page: '/career.html' },
      '/contact': { page: '/contact.html' },
      '/our-offering': { page: '/our-offering.html' },
      '/privacy': { page: '/privacy.html' },
    };
  },

}

module.exports = nextConfig


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',

//   images: {
//     unoptimized: true,
//     domains: ['i.ibb.co'],
//     loader: 'default', // Use the default image loader
//   },
//   async generateStaticParams() {
//     // Define the static paths to pre-render
//     return {
//       '/': { page: '/' },
//       '/about': { page: '/about' },
//       '/cyber-information': { page: '/cyber-information' },
//       '/software-development': { page: '/software-development' },
//       '/Technology-consulting': { page: '/Technology-consulting' },
//       '/product': { page: '/product' },
//       '/career': { page: '/career' },
//       '/contact': { page: '/contact' },
//       '/our-offering': { page: '/our-offering' },
//       '/privacy': { page: '/privacy' },
//     };
//   },

// }

// module.exports = nextConfig




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   reactStrictMode: false,
//   trailingSlash: true,
//   images: {
//   unoptimized: true
//   },
  
//   async generateStaticParams() {
//     // Define the static paths to pre-render
//     return {
//       '/': { page: '/' },
//       '/about': { page: '/about' },
//     };
//   },
//   }
  
//   module.exports = nextConfig
