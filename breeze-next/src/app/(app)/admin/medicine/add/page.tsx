'use client'
import { useMedicine } from '@/providers/useMedicine'
import { Supplier, useSuppliers } from '@/providers/useSuppliers'
import { Button, Select } from '@chakra-ui/react'
import { FormControl, Input } from '@chakra-ui/react'
import { useState } from 'react'

export default function AddMedicine() {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)
    const [expiryDate, setExpiryDate] = useState('')
    const [cost, setCost] = useState(0)
    const [supplier, setSupplier] = useState(0)
    const { suppliers } = useSuppliers()
    const { addMedicine } = useMedicine()

    function handleSubmit(e) {
        e.preventDefault()

        const data = {
            name,
            amount,
            expiryDate,
            cost,
            supplier,
        }
        addMedicine(data)
    }
    return (
        <main>
            <p className="text-violet-700 text-2xl font-bold">Add Medicine</p>
            <form
                onSubmit={handleSubmit}
                className="mt-12 flex flex-col mx-auto gap-6 max-w-[600px] justify-center">
                <FormControl isRequired>
                    <Input
                        placeholder="Medicine Name"
                        className="border-2 "
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </FormControl>
                <FormControl isRequired>
                    <Input
                        placeholder="Amount"
                        type={'number'}
                        min={1}
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                </FormControl>
                <FormControl isRequired>
                    <Input
                        placeholder="Expiry Date"
                        type={'date'}
                        value={expiryDate}
                        onChange={e => setExpiryDate(e.target.value)}
                    />
                </FormControl>
                <FormControl isRequired>
                    <Input
                        placeholder="Cost per Unit"
                        type={'number'}
                        min={1}
                        value={cost}
                        onChange={e => setCost(e.target.value)}
                    />
                </FormControl>
                <FormControl isRequired>
                    <Select
                        placeholder="Select Supplier"
                        value={supplier}
                        onChange={e => setSupplier(e.target.value)}>
                        {suppliers?.map((supplier: Supplier) => {
                            if (supplier.is_verified) {
                                return (
                                    <option
                                        key={supplier.id}
                                        value={supplier.id}>
                                        {supplier.company_name}
                                    </option>
                                )
                            } else return null
                        })}
                    </Select>
                </FormControl>
                <Button
                    className={'self-end px-4 py-2 bg-violet-700'}
                    type="submit"
                    colorScheme={'purple'}>
                    Add Medicine
                </Button>
            </form>
        </main>
    )
}
