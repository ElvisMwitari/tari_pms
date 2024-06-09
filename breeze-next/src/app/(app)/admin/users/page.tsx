'use client'
import { User, useUsers } from '@/providers/useUsers'
import { Button } from '@chakra-ui/button'
import {
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Th,
    Td,
    Thead,
    Tr,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { IoAdd } from 'react-icons/io5'
export default function UsersPage() {
    const router = useRouter()

    const { users } = useUsers()
    return (
        <main>
            <div className="flex justify-between items-center">
                <p className="text-violet-700 text-2xl font-bold">Users</p>
                <Button
                    className={'gap-3'}
                    onClick={() => router.push('users/create')}
                    colorScheme="purple">
                    Add User <IoAdd size={16} />
                </Button>
            </div>
            <section className="mt-6 overflow-y-auto">
                <TableContainer>
                    <Table variant="simple">
                        <TableCaption>Users' information</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Username</Th>
                                <Th>Email</Th>
                                <Th>Role</Th>
                                <Th>Verified</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {users?.map((user: User) => (
                                <Tr key={user.id}>
                                    <Td>{user.name}</Td>
                                    <Td>{user.email}</Td>
                                    <Td>{user.role}</Td>
                                    <Td
                                        className={`${user.email_verified_at ? 'text-green-700' : 'text-red-700'} font-bold`}>
                                        {user.email_verified_at !== ''
                                            ? 'Yes'
                                            : 'No'}
                                    </Td>
                                    <Td className="grid grid-cols-2 gap-4">
                                        <Button
                                            className={'bg-violet-500'}
                                            variant="outline"
                                            colorScheme={'purple'}>
                                            Edit
                                        </Button>
                                        <Button
                                            className={'bg-red-700'}
                                            colorScheme="red">
                                            Delete
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </section>
        </main>
    )
}
