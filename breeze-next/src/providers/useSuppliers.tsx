'use client'
import axios from '@/lib/axios'
import { createContext, useContext, useEffect, useState } from 'react'

export type Supplier = {
    id: number
    company_name: string
    phone: string
    email: string
    is_verified: boolean
}

interface SuppliersContextType {
    suppliers: Supplier[]
    addSupplier: (supplier: any) => void
    updateSupplier: (supplier) => void
    deleteSupplier: (supplierId: string) => void
}

const SuppliersContext = createContext<SuppliersContextType | null>(null)
export default function SuppliersProvider({ children }) {
    const [suppliers, setSuppliers] = useState<Supplier[]>([])
    useEffect(() => {
        function getSuppliers() {
            axios.get('/api/v1/suppliers').then(response => {
                setSuppliers(response.data.data)
            })
        }
        getSuppliers()
    }, [])
    const addSupplier = async supplier => {
        await axios.post('api/v1/suppliers', {
            company_name: supplier.company_name,
            phone: supplier.phone,
            email: supplier.email,
        })
        setSuppliers([...suppliers, supplier])
    }
    const updateSupplier = async supplier => {
        await axios.patch(`api/v1/suppliers/${supplier.supplier_id}`, {
            company_name: supplier.company_name,
            phone: supplier.phone,
            email: supplier.email,
            is_verified: supplier.is_verified,
        })
        setSuppliers(suppliers.map(s => (s.id === supplier.id ? supplier : s)))
    }
    const deleteSupplier = async (supplierId: string) => {
        await axios.delete(`api/v1/suppliers/${supplierId}`)
        setSuppliers(suppliers.filter(s => s.id.toString() !== supplierId))
    }

    return (
        <SuppliersContext.Provider
            value={{ suppliers, addSupplier, updateSupplier, deleteSupplier }}>
            {children}
        </SuppliersContext.Provider>
    )
}

export function useSuppliers() {
    const context = useContext(SuppliersContext)
    if (!context) {
        throw new Error('useSuppliers must be used within a SuppliersProvider')
    }
    return context
}
