/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { esmExternals: true },
    images: {
        domains: [
            'picsum.photos',
            'cdn.pixabay',
        ],
      },
}

module.exports = nextConfig
