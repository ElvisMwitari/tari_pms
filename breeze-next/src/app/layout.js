import { Nunito } from 'next/font/google'
import '@/app/global.css'
import { ChakraProvider } from '@chakra-ui/react'
import SuppliersProvider from '@/providers/useSuppliers'
import UsersProvider from '@/providers/useUsers'
import MedicineProvider from '@/providers/useMedicine'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={nunitoFont.className}>
            <body className="antialiased">
                <ChakraProvider>
                    <UsersProvider>
                        <SuppliersProvider>
                            <MedicineProvider>{children}</MedicineProvider>
                        </SuppliersProvider>
                    </UsersProvider>
                </ChakraProvider>
            </body>
        </html>
    )
}

export const metadata = {
    title: 'Pharmacy Management System',
}

export default RootLayout
