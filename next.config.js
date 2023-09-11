const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    assetPrefix: isProd ? '/Dark-Souls-Wiki/' : '',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.pngmart.com'
            },
            {
                protocol: 'http',
                hostname: '**.imgur.com'
            },
            {
                protocol: 'https',
                hostname: '**.imgur.com'
            },
            {
                protocol: 'https',
                hostname: '**.gematsu.com'
            },
            {
                protocol: 'https',
                hostname: '**.pinimg.com'
            },
            {
                protocol: 'https',
                hostname: 'conceptartworld.com'
            },
            {
                protocol: 'https',
                hostname: '**.media-amazon.com'
            },
            {
                protocol: 'https',
                hostname: 'image.api.playstation.com'
            },
            {
                protocol: 'https',
                hostname: '**.creativeuncut.com'
            },
            {
                protocol: 'https',
                hostname: 'cdn.cloudflare.steamstatic.com'
            },
            {
                protocol: 'https',
                hostname: "darksouls.wiki.fextralife.com"
            },
            {
                protocol: 'https',
                hostname: "static.wikia.nocookie.net"
            },
        ],
    },
}
