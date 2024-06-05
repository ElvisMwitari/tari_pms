import Link from 'next/link'

const ApplicationLogo = ({ size }) => (
    <div className="flex-shrink-0 flex items-center">
        <Link href="">
            <p
                className={`uppercase tracking-widest font-bold ${size === 'large' ? 'text-2xl' : ''}`}>
                Tari Pharmacy
            </p>
        </Link>
    </div>
)

export default ApplicationLogo
