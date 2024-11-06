/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['uploads-ssl.webflow.com'], // Add the external image domain here
    },
}

module.exports = nextConfig
