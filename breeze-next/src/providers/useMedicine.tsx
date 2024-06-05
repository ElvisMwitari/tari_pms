'use client'
import axios from '@/lib/axios'
import { createContext, useContext, useEffect, useState } from 'react'

export type Medicine = {
    id: number
    name: string
    amount: number
    expiration_date: string
    unit_price: number
    supplier: number
}

interface MedicineContextType {
    medicines: Medicine[]
    addMedicine: (medicine) => void
    updateMedicine: (medicine: Medicine) => void
    deleteMedicine: (medicine: Medicine) => void
}

const MedicineContext = createContext<MedicineContextType | null>(null)
export default function MedicineProvider({ children }) {
    const [medicines, setMedicine] = useState<Medicine[]>([])
    useEffect(() => {
        function getMedicine() {
            axios.get('/api/v1/medicine').then(response => {
                setMedicine(response.data.data)
            })
        }
        getMedicine()
    }, [])
    const addMedicine = async medicine => {
        await axios.post('api/v1/medicine', {
            amount: parseInt(medicine.amount),
            unit_price: parseInt(medicine.cost),
            name: medicine.name,
            expiration_date: medicine.expiryDate,
        })
        setMedicine([...medicines, medicine])
    }
    const updateMedicine = (medicine: Medicine) => {
        setMedicine(medicines.map(s => (s.id === medicine.id ? medicine : s)))
    }
    const deleteMedicine = (medicine: Medicine) => {
        setMedicine(medicines.filter(s => s.id !== medicine.id))
    }

    return (
        <MedicineContext.Provider
            value={{ medicines, addMedicine, updateMedicine, deleteMedicine }}>
            {children}
        </MedicineContext.Provider>
    )
}

export function useMedicine() {
    const context = useContext(MedicineContext)
    if (!context) {
        throw new Error('useMedicine must be used within a MedicinesProvider')
    }
    return context
}
