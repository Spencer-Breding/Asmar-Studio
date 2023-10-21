import '../styles/globals.css'
import Head from 'next/head';
import Navbar from '../components/navbar'
import { Sorts_Mill_Goudy } from 'next/font/google'

const goudy = Sorts_Mill_Goudy({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={goudy.className}>
            <Head>
                <meta
                    http-equiv="Content-Security-Policy"
                    content="default-src 'self'; img-src 'self'; font-src 'self';"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <meta
                    name="description"
                    content="Design, Modeling, Sculpting, Prototypes, Metalwork, Woodwork, Fiberglass, Carpentry, Welding, Trade Shows, Set Building, Custom Furniture, Painting, Finishing, Project Management, Logistics, Resin Work"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, viewport-fit=cover" />
                <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
            </Head>
            <body>
                <Navbar />
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}
