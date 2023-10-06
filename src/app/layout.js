import '../styles/globals.css'
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
            <head>
                <meta
                    name="description"
                    content="Design, Modeling, Sculpting, Prototypes, Metalwork, Woodwork, Fiberglass, Carpentry, Welding, Trade Shows, Set Building, Custom Furniture, Painting, Finishing, Project Management, Logistics, Resin Work"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
            </head>
            <body>
                <Navbar />
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}
