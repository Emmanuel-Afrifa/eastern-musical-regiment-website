"use client"
import Button from "../atoms/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const HeaderNavLinks = () => {

    const [openNavbar, setOpenNavbar] = useState<boolean>(false)
    const pathname = usePathname()

    console.log(openNavbar)

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
        <div className="relative border-2">
            <Button
                content={
                    <FontAwesomeIcon icon={faBars} className="bg-gold text-xl" />
                }
                ariaLabel="navbar open button"
                classname={`lg:hidden ${openNavbar ? "hidden" : "flex"}`}
                handleClick={() => setOpenNavbar(true)}
            />
            <ul 
                className={`${openNavbar ? "flex" : "hidden"} pl-10 lg:pl-0 pt-10 pb-28 lg:py-0 lg:flex flex-col lg:flex-row gap-5 fixed inset-0 lg:sticky z-60 backdrop-blur-3xl bg-bg-black/70 w-full`}
                onClick={() => setOpenNavbar(false)}
            >
                <Button
                    content={
                        <div className="h-10 w-10 bg-gold rounded-full flex justify-center items-center animate-bump">
                            <FontAwesomeIcon icon={faWindowClose} className="bg-gold/70 text-xl" />
                        </div>  
                    }
                    ariaLabel="navbar close button"
                    classname={`lg:hidden ${openNavbar ? "flex" : "hidden"}`}
                    handleClick={() => setOpenNavbar(false)}
                />
                {navLinks.map(navLink => {
                    const isActive = navLink.href === "/" ? pathname === "/" : pathname === navLink.href || (pathname.startsWith(navLink.href))

                    return (
                        <li 
                            key={navLink.id}
                        >
                            <Link 
                                href={navLink.href}
                                aria-label={navLink.ariaLabel}
                                className={`${isActive ? "text-gold": "text-white"} hover:text-gold/60 transition-all duration-150 font-inter`}
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