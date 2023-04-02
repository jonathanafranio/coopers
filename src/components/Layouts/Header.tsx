import Link from "next/link"
import Image from "next/image"
import Logo from "../../assets/img/logo.png"

const Header = () => {
    return (
        <header className="header">
            <Link href={ '/' } className="header__logo">
                <Image src={ Logo } alt="Coopers" />
            </Link>

            <button className="header__btn">
                entrar
            </button>
        </header>
    )
}
export default Header;