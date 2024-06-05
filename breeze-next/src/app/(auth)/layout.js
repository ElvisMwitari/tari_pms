import AuthCard from '@/app/(auth)/AuthCard'
import ApplicationLogo from '@/components/ApplicationLogo'

export const metadata = {
    title: 'Laravel',
}

const Layout = ({ children }) => {
    return (
        <div>
            <div className="text-gray-900 antialiased">
                <AuthCard
                    logo={
                        <ApplicationLogo size="large" className="w-20 h-20 fill-current text-gray-500" />
                    }>
                    {children}
                </AuthCard>
            </div>
        </div>
    )
}

export default Layout
