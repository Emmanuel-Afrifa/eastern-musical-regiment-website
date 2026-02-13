import Logo from "../atoms/Logo"
import HeaderNavLinks from "../molecules/HeaderNavLinks"

const Header = () => {
    return (
        <section>
            <div>
                <Logo />
                <HeaderNavLinks />
            </div>
        </section>
    )
}

export default Header