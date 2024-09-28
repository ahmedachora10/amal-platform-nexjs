/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', '127.0.0.1', 'i.ibb.co'],
    },
    experimental: {
        urlImports: ['http://127.0.0.1:8000', 'http://localhost:8000', 'https://i.ibb.co'], // Add this if using a non-default port
    },
};


export default nextConfig;
