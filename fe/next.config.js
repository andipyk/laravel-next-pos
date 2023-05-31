/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['placehold.co', 'www.buruhtinta.co.id'],
    },
    experimental: {
        serverActions: true,
    }
}

module.exports = nextConfig
