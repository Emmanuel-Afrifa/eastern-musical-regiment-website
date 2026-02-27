import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import Container from "../atoms/Container";

const Footer = () => {

    type QuickLink = {
        id: string;
        name: string;
        href: string;
        ariaLabel: string;
    }

    const quickLinks: QuickLink[] = [
        {id: "01", name: "Home", href: "/#hero", ariaLabel: "home link"},
        {id: "02", name: "About", href: "/about", ariaLabel: "about us link"},
        {id: "03", name: "Our Bands", href: "/bands", ariaLabel: "our bands link"},
        {id: "04", name: "Events", href: "/events", ariaLabel: "events link"},
    ]

    return (
        <footer className="w-full center bg-fg-black py-28">
            <Container>
                <div className="flex flex-col px-6 md:px-10 lg:px-30">
                    <div className="flex flex-col">
                        <div className="flex flex-col min-[500px]:flex-row justify-between">
                            <div className="flex flex-col justify-between">
                                <h3 className="font-inter text-lg md:text-xl font-bold text-white mb-6">Quick Links</h3>
                                <ul className="flex flex-col gap-3 md:gap-4 lg:gap-5">
                                    {quickLinks.map(link => {
                                        return (
                                            <li
                                                key={link.id}
                                                className="text-fg-dark-gray text-xs md:text-base lg:text-lg font-inter bg-grow z-0 hover:px-5 hover:text-fg-black transition-all duration-500"
                                            >
                                                <Link 
                                                    href={link.href}
                                                    aria-label={link.ariaLabel}
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                            <div className="mt-8 min-[500px]:mt-0">
                                <h3 className="font-inter text-lg md:text-xl font-bold text-white mb-6">Contact Us</h3>
                                <ul className="flex flex-col gap-3 md:gap-4 lg:gap-5 text-fg-dark-gray text-xs md:text-base lg:text-lg font-inter">
                                    <li>
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={faHome} className="text-gold mr-4" />
                                            <p className="inline-block">123 Music Avenue Accra, Ghana</p>
                                        </div>
                                    </li>

                                    <li>
                                        <a 
                                            href="tel:+233123456789"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="phone contact"
                                        >
                                            <FontAwesomeIcon icon={faPhone} className="text-gold mr-4" /> 
                                            <span className="bg-grow z-0 hover:px-5 hover:text-fg-black transition-all duration-500">+233 123 456 789</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a 
                                            href="mailto:info@example.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="email address"
                                        >
                                            <FontAwesomeIcon icon={faEnvelope} className="text-gold mr-4" />
                                            <span className="bg-grow z-0 hover:px-5 hover:text-fg-black transition-all duration-500">info@example.com</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row justify-between items-center mt-10'>
                        <p className='text-fg-dark-gray text-center text-xs md:text-base'>
                            <small>© 2026 Eastern Musical Regiment. All rights reserved.</small>
                        </p>
                        <p className='text-fg-dark-gray text-center text-xs md:text-base'>  
                            <small>Developed by <span className='text-gold/80 underline-grow'><a href="https://www.linkedin.com/in/emmanuel-afrifa-840674214/" rel="noopener noreferrer" target='_blank'>Emmanuel Afrifa</a></span></small>
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer