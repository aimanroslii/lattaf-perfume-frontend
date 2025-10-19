/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'utfs.io',
                port: '',
            },
        ],
        domains : [
            "cdn-ilboccp.nitrocdn.com",
            "lattafa.com",
        ]
    }
}

export default nextConfig