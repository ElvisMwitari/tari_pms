'use client'
import { Medicine, useMedicine } from '@/providers/useMedicine'
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
import { IoAdd, IoRemove } from 'react-icons/io5'
export default function MedicinePage() {
    const router = useRouter()
    const { medicines } = useMedicine()
    return (
        <main>
            <div className="flex justify-between items-center">
                <p className="text-violet-700 text-2xl font-bold">Medicines</p>
                <div className="gap-2 flex">
                    <Button
                        className={'gap-3'}
                        onClick={() => router.push('medicine/administer')}
                        colorScheme="purple"
                        variant={'outline'}>
                        Administer to Customer <IoRemove size={16} />
                    </Button>
                    <Button
                        className={'gap-3'}
                        onClick={() => router.push('medicine/add')}
                        colorScheme="purple">
                        Add Medicine <IoAdd size={16} />
                    </Button>
                </div>
            </div>
            <section className="mt-6 overflow-y-auto">
                <TableContainer>
                    <Table variant="simple">
                        <TableCaption>Medicines' information</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Amount</Th>
                                <Th>Stock Expiry</Th>
                                <Th>Cost per Unit</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {medicines?.map((medicine: Medicine) => (
                                <Tr key={medicine.id}>
                                    <Td>{medicine.name}</Td>
                                    <Td>{medicine.amount}</Td>
                                    <Td>{medicine.expiration_date}</Td>
                                    <Td>{medicine.unit_price}</Td>
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
