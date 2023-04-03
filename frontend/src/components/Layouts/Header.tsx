import Link from "next/link"
import Image from "next/image"
import Logo from "../../assets/img/logo.png"
import ModalLogin from '../ModalLogin'
import { useState } from "react"

const Header = () => {
    const [modalShow, setModalShow] = useState(false)
    return (
        <header className="header">
            <Link href={ '/' } className="header__logo">
                <Image src={ Logo } alt="Coopers" />
            </Link>

            <button className="header__btn" onClick={ e => setModalShow(true) }>
                entrar
            </button>

            { modalShow ? (<ModalLogin toggleModal={ setModalShow } />) : false }
        </header>
    )
}
export default Header;