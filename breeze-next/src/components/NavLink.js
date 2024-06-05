import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
} from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavLink({ children, href }) {
    const pathname = usePathname()
    const linkClass = path =>
        `block px-3 py-4 w-full text-left font-bold flex items-center gap-3 ${pathname === path ? 'bg-violet-700 text-white' : ' text-violet-700'}`
    return (
        <li className="w-full">
            <Link href={href} className={linkClass(href)}>
                {children}
            </Link>
        </li>
    )
}

export function AccordionNavLink({ item }) {
    const Icon = item[0].icon

    return (
        <Accordion
            key={item[0].label}
            defaultIndex={[1]}
            allowMultiple
            className="">
            <AccordionItem key={item} className="border-none">
                <h2>
                    <AccordionButton>
                        <Box
                            flex="1"
                            textAlign="left"
                            className="text-violet-700 font-bold flex gap-3 items-center">
                            <Icon />
                            {item[0].label}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel>
                    {item.map(subItem => (
                        <NavLink key={subItem.href} href={subItem.href}>
                            {subItem.label}
                        </NavLink>
                    ))}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default NavLink
