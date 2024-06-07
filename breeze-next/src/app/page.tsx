'use client'
import ApplicationLogo from '@/components/ApplicationLogo'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter()
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <ApplicationLogo size={'large'} />
            <p className="text-gray-700 font-bold mt-4">
                Your #1 pharmacy management system
            </p>
            <Button className="mt-8" onClick={() => router.push('login')} colorScheme="purple">
                Get Started
            </Button>
        </div>
    )
}
