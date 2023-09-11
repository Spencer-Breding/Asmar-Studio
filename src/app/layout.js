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
            <body>
                <Navbar />
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}
