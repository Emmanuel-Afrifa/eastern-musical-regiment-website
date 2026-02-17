import Image from "next/image"
import emrLogo from "../../../public/images/EMR_LOGO.svg"

const Logo = () => {
    return (
        <div>
            <Image
                src={emrLogo}
                alt="Eastern Musical Regiment Logo"
                width={48}
                height={48}
            />
        </div>
    )
}

export default Logo