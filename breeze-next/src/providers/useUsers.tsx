'use client'
import axios from '@/lib/axios'
import { createContext, useContext, useEffect, useState } from 'react'

export type User = {
    id: number
    name: string
    email: string
    email_verified_at: string
    role: string
}

interface UsersContextType {
    users: User[]
    addUser: (user: User) => void
    updateUser: (user: User) => void
    deleteUser: (user: User) => void
}

const UsersContext = createContext<UsersContextType | null>(null)
export default function UsersProvider({ children }) {
    const [users, setUsers] = useState<User[]>([])
    useEffect(() => {
        function getUsers() {
            axios.get('/api/v1/users').then(response => {
                setUsers(response.data.data)
            })
        }
        getUsers()
    }, [])
    const addUser = (user: User) => {
        setUsers([...users, user])
    }
    const updateUser = (user: User) => {
        setUsers(users.map(s => (s.id === user.id ? user : s)))
    }
    const deleteUser = (user: User) => {
        setUsers(users.filter(s => s.id !== user.id))
    }

    return (
        <UsersContext.Provider
            value={{ users, addUser, updateUser, deleteUser }}>
            {children}
        </UsersContext.Provider>
    )
}

export function useUsers() {
    const context = useContext(UsersContext)
    if (!context) {
        throw new Error('useUsers must be used within a UsersProvider')
    }
    return context
}
