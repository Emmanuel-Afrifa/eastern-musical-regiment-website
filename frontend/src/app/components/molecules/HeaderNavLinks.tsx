"use client"
import Button from "../atoms/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import Link from "next/link"

const HeaderNavLinks = () => {

    const [openNavbar, setOpenNavbar] = useState<boolean>(false)

    type NavItem = {
        id: string;
        name: string;
        href: string;
        ariaLabel: string;
    }

    const navLinks: NavItem[] = [
        {id: "01", name: "Home", href: "/", ariaLabel: "home link"},
        {id: "02", name: "About", href: "/about", ariaLabel: "about us link"},
        {id: "03", name: "Our Bands", href: "/bands", ariaLabel: "our bands link"},
        {id: "04", name: "Events", href: "/events", ariaLabel: "events link"},
    ]

    return (
        <div>
            <Button
                content={
                    <FontAwesomeIcon icon={faBars} className="bg-red-600" />
                }
                ariaLabel="navbar open button"
                classname=""
                handleClick={() => setOpenNavbar(true)}
            />
            <Button
                content={
                    <FontAwesomeIcon icon={faWindowClose} className="bg-red-600" />
                }
                ariaLabel="navbar close button"
                classname=""
                handleClick={() => setOpenNavbar(false)}
            />

            <ul>
                {navLinks.map(navLink => {
                    return (
                        <li 
                            key={navLink.id}
                        >
                            <Link 
                                href={navLink.href}
                                aria-label={navLink.ariaLabel}
                            >
                                {navLink.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default HeaderNavLinks