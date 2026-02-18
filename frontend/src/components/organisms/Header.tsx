import Logo from "../atoms/Logo"
import HeaderNavLinks from "../molecules/HeaderNavLinks"

const Header = () => {
    return (
        <header className="w-full bg-fg-black lg:bg-transparent lg:backdrop-blur-2xl py-3 md:py-5 flex items-center justify-center fixed z-40">
            <div className="w-full max-w-360 mx-auto flex justify-between items-center px-5 md:px-10">
                <Logo />
                <HeaderNavLinks />
            </div>
        </header>
    )
}

export default Header