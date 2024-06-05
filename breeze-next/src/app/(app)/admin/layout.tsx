'use client'
import {
    IoSpeedometer,
    IoPerson,
    IoPeople,
    IoMedical,
    IoSettings,
    IoPersonCircleOutline,
} from 'react-icons/io5'
import NavLink, { AccordionNavLink } from '@/components/NavLink'
import { useAuth } from '@/hooks/auth'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const NavLinkList = [
    {
        href: '/admin',
        icon: IoSpeedometer,
        label: 'Dashboard',
    },
    [
        {
            href: '/admin/users',
            icon: IoPeople,
            label: 'Users',
        },
        {
            href: '/admin/users/create',
            label: 'Add User',
        },
    ],
    [
        {
            href: '/admin/suppliers',
            icon: IoPerson,
            label: 'Supplier',
        },
        {
            href: '/admin/suppliers/add',
            label: 'Add Supplier',
        },
    ],
    [
        {
            href: '/admin/medicine',
            icon: IoMedical,
            label: 'Medicine',
        },
        { href: '/admin/medicine/add', label: 'Add Medicine' },
        { href: '/admin/medicine/administer', label: 'Administer Medicine' },
    ],
    {
        href: '/admin/settings',
        icon: IoSettings,
        label: 'Settings',
    },
    {
        href: '/admin/profile',
        icon: IoPersonCircleOutline,
        label: 'Profile',
    },
]
export default function AdminLayout({ children }) {
    const { user } = useAuth()
    const router = useRouter()
    useEffect(() => {
        if (!user.email_verified_at) {
            router.replace('/verify-email')
        }
    }, [user])
    useEffect(() => {
        if (user.roles[0].title !== 'admin') {
            router.replace('/')
        }
    }, [user])
    return (
        <main className="flex">
            <ul className="bg-white h-screen w-[300px]">
                {NavLinkList.map(item => {
                    if (Array.isArray(item)) {
                        return (
                            <AccordionNavLink key={item[0].label} item={item} />
                        )
                    } else
                        return (
                            <NavLink key={item.href} href={item.href}>
                                <item.icon />
                                {item.label}
                            </NavLink>
                        )
                })}
            </ul>
            <div className="p-8 bg-gray-50/100  flex-grow">{children}</div>
        </main>
    )
}
