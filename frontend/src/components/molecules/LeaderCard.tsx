import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp, faYoutube, faFacebook, faInstagram, faTiktok, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"


type LeaderProps = {
    id: string;
    name: string;
    role: string;
    bio: string;
    email?: string;
    phone?: string;
    image: {
        src: string;
        alt?: string
    };
    socials?: {
        facebook?: string;
        instagram?: string,
        whatsapp?: string,
        x?: string,
        linkedin?: string,
        tiktok?: string,
        youtube?: string
    }
}

const LeaderCard = ({leaderInfo}: {leaderInfo: LeaderProps}) => {

    const socials = leaderInfo.socials

    const socialsList = [
        (socials && socials.facebook !== "") && {icon: faFacebook, href: `https://facebook.com/${socials.facebook}`, ariaLabel: "facebook page"},
        (socials && socials.whatsapp !== "") && {icon: faWhatsapp, href: `https://wa.me/${socials.whatsapp}`, ariaLabel: "whatsapp contact"},
        (socials && socials.instagram !== "") && {icon: faInstagram, href: `https://instagram.com/${socials.instagram}`, ariaLabel: "instagram page"},
        (socials && socials.tiktok !== "") && {icon: faTiktok, href: `https://facebook.com/${socials.tiktok}`, ariaLabel: "tiktok page"},
        (socials && socials.youtube !== "") && {icon: faYoutube, href: `https://facebook.com/${socials.youtube}`, ariaLabel: "youtube page"},
        (socials && socials.linkedin !== "") && {icon: faLinkedin, href: `https://facebook.com/${socials.linkedin}`, ariaLabel: "linkedin page"},
        (socials && socials.x !== "") && {icon: faXTwitter, href: `https://facebook.com/${socials.x}`, ariaLabel: "X, (formerly twitter) page"}
    ]

    return (
        <div className="flex flex-col w-full max-w-sm rounded-2xl bg-bg-black overflow-hidden group">
            <div className="relative aspect-3/4 rounded-t-2xl overflow-hidden">
                <Image
                    src={leaderInfo.image.src}
                    alt={leaderInfo.image.alt || "leader image"}
                    fill
                    className="object-cover w-full h-full rounded-t-2xl group-hover:scale-110 transition-all duration-700 group-hover:opacity-70"
                />
            </div>
            <div className="p-4 md:p-6">
                <h3 className="text-white text-lg md:text-xl mb-5">{leaderInfo.name}</h3>
                <p className="text-gold text-base md:text-lg mb-5">{leaderInfo.role}</p>
                <p className="text-fg-dark-gray text-xs md:text-sm lg:text-base mb-5">{leaderInfo.bio}</p>
                <div className="flex gap-2 md:gap-3 flex-wrap">
                    {leaderInfo.phone && (
                        <a 
                            href={`tel:${leaderInfo.phone}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${leaderInfo.role.toLowerCase()}'s phone number`}
                            className="text-fg-dark-gray hover:text-gold/80"
                        >
                            <FontAwesomeIcon icon={faPhone} />
                        </a>
                    )}
                    {leaderInfo.email && (
                        <a 
                            href={`mailto:${leaderInfo.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${leaderInfo.role.toLowerCase()}'s email address`}
                            className="text-fg-dark-gray hover:text-gold/80"
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    )}
                    {socialsList.map((socialAcc, index) => {
                        return (
                            socialAcc && 
                            <a 
                                key={index}
                                href={socialAcc.href}
                                aria-label={`${leaderInfo.role}'s ${socialAcc.ariaLabel}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-fg-dark-gray hover:text-gold/80"
                            >
                                <FontAwesomeIcon icon={socialAcc.icon} size="lg" />
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default LeaderCard