import { Card, CardBody, Text } from '@chakra-ui/react'
export default function AnalyticsCard({ title, value }) {
    return (
        <Card className="shadow-md shadow-gray-200">
            <CardBody className="flex flex-col">
                <Text className="text-violet-600 font-bold">{title}</Text>
                <Text className="self-end text-violet-900 font-black text-xl">
                    {value}
                </Text>
            </CardBody>
        </Card>
    )
}
