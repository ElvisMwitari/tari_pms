'use client'

import { Button, Select } from '@chakra-ui/react'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import { useState } from 'react'
import { useAuth } from '@/hooks/auth'

export default function CreateUserPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])
    const { addUser } = useAuth()

    const submitForm = event => {
        event.preventDefault()
        const data = {
            name,
            email,
            role,
            password,
            password_confirmation: passwordConfirmation,
        }
        addUser({ ...data, role: parseInt(data.role), setErrors })
    }

    return (
        <>
            <p className="text-violet-700 text-2xl font-bold">Add User</p>
            <form onSubmit={submitForm}>
                {/* Name */}
                <div>
                    <Label htmlFor="name">Name</Label>

                    <Input
                        id="name"
                        type="text"
                        value={name}
                        className="block mt-1 w-full"
                        onChange={event => setName(event.target.value)}
                        required
                        autoFocus
                    />

                    <InputError messages={errors.name} className="mt-2" />
                </div>

                {/* Email Address */}
                <div className="mt-4">
                    <Label htmlFor="email">Email</Label>

                    <Input
                        id="email"
                        type="email"
                        value={email}
                        className="block mt-1 w-full"
                        onChange={event => setEmail(event.target.value)}
                        required
                    />

                    <InputError messages={errors.email} className="mt-2" />
                </div>

                {/* User Role */}
                <div className="mt-4">
                    <Label htmlFor="role">Role</Label>

                    <Select
                        id="role"
                        value={role}
                        onChange={event => setRole(event.target.value)}>
                        <option value={1}>Admin</option>
                        <option value={2}>Customer</option>
                        <option value={3}>Supplier</option>
                    </Select>

                    <InputError messages={errors.role} className="mt-2" />
                </div>

                {/* Password */}
                <div className="mt-4">
                    <Label htmlFor="password">Password</Label>

                    <Input
                        id="password"
                        type="password"
                        value={password}
                        className="block mt-1 w-full"
                        onChange={event => setPassword(event.target.value)}
                        required
                        autoComplete="new-password"
                    />

                    <InputError messages={errors.password} className="mt-2" />
                </div>

                {/* Confirm Password */}
                <div className="mt-4">
                    <Label htmlFor="passwordConfirmation">
                        Confirm Password
                    </Label>

                    <Input
                        id="passwordConfirmation"
                        type="password"
                        value={passwordConfirmation}
                        className="block mt-1 w-full"
                        onChange={event =>
                            setPasswordConfirmation(event.target.value)
                        }
                        required
                    />

                    <InputError
                        messages={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button
                        className="ml-4"
                        colorScheme={'purple'}
                        type="submit">
                        Register
                    </Button>
                </div>
            </form>
        </>
    )
}
