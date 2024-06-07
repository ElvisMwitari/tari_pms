import UseVerifiedUser from '../providers/useVerifiedUser'
import AdminLayout from './(app)/admin/layout'
function MyApp({ Component, pageProps, router }) {
    const getLayout = () => {
        if (router.pathname.startsWith('/admin')) {
            return (
                <UseVerifiedUser>
                    <AdminLayout />
                </UseVerifiedUser>
            )
        } else {
            return ({ children }) => <>{children}</>
        }
    }

    const Layout = getLayout()

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
