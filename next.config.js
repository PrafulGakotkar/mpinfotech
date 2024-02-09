/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
    domains: ['i.ibb.co'],
    loader: 'default', // Use the default image loader
  },

}

module.exports = nextConfig




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   images: {
//     loader: 'custom',
//     loaderFile: './public/assets/img/loader.js',
//     // loaderFile: './my-loader.ts',
//   },
// }
 
// module.exports = nextConfig
