'use client'

import { useAuth } from '@/hooks/auth'
import Navigation from '@/app/(app)/Navigation'
import Loading from '@/app/(app)/Loading'
import LockScreen from 'react-lock-screen'
import { Button, Input } from '@chakra-ui/react'
import { useState } from 'react'

const AppLayout = ({ children }) => {
    const { user, login } = useAuth({ middleware: 'auth' })
    const [passCode, setPassCode] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState('')

    if (!user) {
        return <Loading />
    }

    function handleLock() {
        login({
            email: user.email,
            password: passCode,
            setErrors,
            setStatus,
        })
    }
    const getLockScreenUi = setLock => {
        return (
            <div className="flex w-full h-full top-0 left-0 absolute justify-center items-center">
                <div className="flex flex-col gap-4">
                    <p>{errors?.join('')}</p>
                    <p>{status}</p>
                    <Input
                        type="password"
                        placeholder="Enter passcode"
                        value={passCode}
                        onChange={e => setPassCode(e.target.value)}
                    />
                    <Button
                        onClick={handleLock}
                        variant="contained"
                        colorScheme={'purple'}>
                        Unlock
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <LockScreen timeout={3600000} ui={getLockScreenUi}>
            <div className="min-h-screen bg-gray-100">
                <Navigation user={user} />

                <main>{children}</main>
            </div>
        </LockScreen>
    )
}

export default AppLayout
