'use client'
import { Button, useDisclosure } from '@chakra-ui/react'
import { Supplier, useSuppliers } from '@/providers/useSuppliers'
import {
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    FormControl,
    FormLabel,
    Input,
    RadioGroup,
    Stack,
    Radio,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { IoAdd } from 'react-icons/io5'
import { useState } from 'react'

export default function Page() {
    const router = useRouter()
    const { suppliers, deleteSupplier } = useSuppliers()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [supplyId, setSupplyId] = useState(0)
    function handleDelete(sId: number) {
        deleteSupplier(sId.toString())
    }
    return (
        <main>
            <div className="flex justify-between items-center">
                <p className="text-violet-700 text-2xl font-bold">Suppliers</p>
                <Button
                    className={'gap-3'}
                    onClick={() => router.push('suppliers/add')}
                    colorScheme="purple">
                    Add Supplier <IoAdd size={16} />
                </Button>
            </div>
            <section className="mt-6 overflow-y-auto">
                <TableContainer>
                    <Table variant="simple" size={"sm"}>
                        <TableCaption>Suppliers' information</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Company Name</Th>
                                <Th>Email</Th>
                                <Th>Phone</Th>
                                <Th>Verified</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {suppliers?.map((supplier: Supplier) => (
                                <Tr key={supplier.id}>
                                    <Td>{supplier.company_name}</Td>
                                    <Td>{supplier.email}</Td>
                                    <Td className="text-right" isNumeric>
                                        {supplier.phone}
                                    </Td>
                                    <Td
                                        className={`${supplier.is_verified ? 'text-green-700' : 'text-red-700'} font-bold`}>
                                        {supplier.is_verified ? 'Yes' : 'No'}
                                    </Td>
                                    {isOpen && (
                                        <ModalEditForm
                                            isOpen={isOpen}
                                            onClose={onClose}
                                            supplyId={supplyId}
                                        />
                                    )}
                                    <Td className="grid grid-cols-2 gap-4">
                                        <Button
                                            className={'bg-violet-500'}
                                            variant="outline"
                                            onClick={() => {
                                                onOpen()
                                                setSupplyId(supplier.id)
                                            }}
                                            colorScheme={'purple'}>
                                            Edit
                                        </Button>
                                        <Button
                                            colorScheme={'red'}
                                            onClick={() =>
                                                handleDelete(supplier.id)
                                            }>
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

function ModalEditForm({ isOpen, onClose, supplyId }) {
    const { suppliers, updateSupplier } = useSuppliers()
    const currentSupplier =
        suppliers.find(supplier => supplier.id === supplyId) || null
    const [companyName, setCompanyName] = useState(
        supplyId ? currentSupplier.company_name : '',
    )
    const [email, setEmail] = useState(supplyId ? currentSupplier.email : '')
    const [phone, setPhone] = useState(supplyId ? currentSupplier.phone : '')
    const [isVerified, setIsVerified] = useState(
        currentSupplier.is_verified ? '1' : '0',
    )

    function handleSubmit() {
        const data = {
            supplier_id: supplyId,
            company_name: companyName,
            email,
            phone,
            is_verified: isVerified === '1',
        }
        updateSupplier(data)
        window.location.reload()
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit Supplier</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Company Name</FormLabel>
                        <Input
                            placeholder="Company  name"
                            value={companyName}
                            onChange={e => setCompanyName(e.target.value)}
                            type={'text'}
                        />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            placeholder="Email"
                            type={'email'}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Phone</FormLabel>
                        <Input
                            placeholder="Phone"
                            type={'tel'}
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Verify</FormLabel>
                        <RadioGroup value={isVerified} onChange={setIsVerified}>
                            <Stack direction="row">
                                <Radio value="0">No</Radio>
                                <Radio value="1">Yes</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="purple" mr={3} onClick={handleSubmit}>
                        Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
