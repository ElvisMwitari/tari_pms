'use client'
import AnalyticsCard from '@/components/AnalyticsCard'
import { useMedicine } from '@/providers/useMedicine'
import { useSuppliers } from '@/providers/useSuppliers'
import { useUsers } from '@/providers/useUsers'
export default function Page() {
    const { suppliers } = useSuppliers()
    const { users } = useUsers()
    const { medicines } = useMedicine()
    const analytics = [
        {
            title: 'Suppliers',
            value: suppliers.length,
        },
        {
            title: 'Users',
            value: users.length,
        },
        {
            title: 'Medicines',
            value: medicines.length,
        },
    ]
    return (
        <main>
            <div className="w-full grid grid-cols-4 gap-2">
                {analytics.map((a, i) => (
                    <AnalyticsCard key={i} title={a.title} value={a.value} />
                ))}
            </div>
        </main>
    )
}
