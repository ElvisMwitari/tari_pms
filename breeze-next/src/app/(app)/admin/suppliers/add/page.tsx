'use client'
import { useSuppliers } from '@/providers/useSuppliers'
import { Button } from '@chakra-ui/react'
import { FormControl, Input } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function AddSupplier() {
    const [companyName, setCompanyName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const { addSupplier } = useSuppliers()
    const router = useRouter()
    function handleSubmit(e) {
        e.preventDefault()
        const data = {
            company_name: companyName,
            email,
            phone,
        }
        addSupplier(data)
        router.push('/admin/suppliers')
        window.location.reload()
    }
    return (
        <main>
            <p className="text-violet-700 text-2xl font-bold">Add Supplier</p>
            <form
                onSubmit={handleSubmit}
                className="mt-12 flex flex-col mx-auto gap-6 max-w-[600px] justify-center">
                <FormControl isRequired>
                    <Input
                        placeholder="Company Name"
                        className="border-2"
                        value={companyName}
                        onChange={e => setCompanyName(e.target.value)}
                    />
                </FormControl>
                <FormControl isRequired>
                    <Input
                        placeholder="Email"
                        type={'email'}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormControl>
                <FormControl isRequired>
                    <Input
                        placeholder="Phone"
                        type={'tel'}
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                </FormControl>
                <Button
                    className={'self-end px-4 py-2 bg-violet-700'}
                    type="submit"
                    colorScheme={'purple'}>
                    Add Supplier
                </Button>
            </form>
        </main>
    )
}
