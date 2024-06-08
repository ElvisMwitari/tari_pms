'use client'

import { Button } from '@chakra-ui/react'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'

const Page = () => {
    const router = useRouter()
    const { user, updateProfile } = useAuth()
    const [username, setUsername] = useState(user?.name || '')
    const [email, setEmail] = useState(user?.email || '')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()
        updateProfile({ name: username, email, setStatus, setErrors })
    }

    return (
        <>
            <AuthSessionStatus className="mb-4" status={status} />
            <form onSubmit={submitForm} className="max-w-[600px] flex gap-6">
                {/*  Username */}
                <div>
                    <Label htmlFor="username">Username</Label>

                    <Input
                        id="username"
                        type="text"
                        value={username}
                        className="block mt-1 w-full"
                        onChange={event => setUsername(event.target.value)}
                        required
                        autoFocus
                    />

                    <InputError messages={errors.username} className="mt-2" />
                </div>

                {/* Email Address */}
                <div>
                    <Label htmlFor="email">Email</Label>

                    <Input
                        id="email"
                        type="email"
                        value={email}
                        className="block mt-1 w-full"
                        onChange={event => setEmail(event.target.value)}
                        required
                        autoFocus
                    />

                    <InputError messages={errors.email} className="mt-2" />
                </div>

                {/* Password */}
                {/* <div className="mt-4">
                //    <Label htmlFor="password">Password</Label>

                //    <Input
                //        id="password"
                //        type="password"
                //        value={password}
                //        className="block mt-1 w-full"
                //        onChange={event => setPassword(event.target.value)}
                //        required
                //        autoComplete="current-password"
                //    />

                //    <InputError messages={errors.password} className="mt-2" />
                //</div>
*/}
                {/* Remember Me */}

                <div className="flex items-center justify-end mt-4">
                    <Button
                        className="ml-3"
                        colorScheme={'purple'}
                        type="submit">
                        Save
                    </Button>
                </div>
            </form>
        </>
    )
}

export default Page
