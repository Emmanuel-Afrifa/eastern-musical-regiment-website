"use client"
import Button from "../atoms/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const HeaderNavLinks = () => {

    const [openNavbar, setOpenNavbar] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        document.body.style.overflow = openNavbar ? "hidden" : "auto"

        return () => {
            document.body.style.overflow = "auto"
        }
    }, [openNavbar])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setOpenNavbar(false)
            }
        }

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

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
        <div className="relative">
            <Button
                content={
                    <FontAwesomeIcon icon={faBars} className="bg-gold text-xl" />
                }
                ariaLabel="navbar open button"
                classname={`lg:hidden ${openNavbar ? "hidden" : "flex"} cursor-pointer`}
                handleClick={() => setOpenNavbar(true)}
            />
            <ul 
                className={`${openNavbar ? "flex" : "hidden"} pl-10 pt-10 pb-28 
                    lg:flex flex-col lg:flex-row gap-5 fixed inset-0 lg:sticky z-60 cursor-pointer
                    backdrop-blur-3xl bg-fg-black/70 w-full lg:px-10 lg:py-2 lg:rounded-full lg:bg-fg-fade-white/40`}
                // onClick={toggleOpenNavbar}
            >
                <Button
                    content={
                        <div className="h-10 w-10 bg-gold rounded-full flex justify-center items-center animate-bump">
                            <FontAwesomeIcon icon={faWindowClose} className="bg-gold/70 text-xl" />
                        </div>  
                    }
                    ariaLabel="navbar close button"
                    classname={`lg:hidden ${openNavbar ? "flex" : "hidden"} cursor-pointer`}
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
                                className={`${isActive ? "text-gold lg:hover:text-gold/60": "text-white lg:text-fg-black lg:opacity-60 lg:hover:opacity-100"} transition-all duration-150 font-inter`}
                                onClick={() => setOpenNavbar(false)}
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