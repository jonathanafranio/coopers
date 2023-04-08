import Link from "next/link"
import Image from "next/image"
import Logo from "../../assets/img/logo.png"
import ModalLogin from '../ModalLogin'
import { useState } from "react"

const Header = (props) => {
    const { logged } = props;
    const logout = () => {
        localStorage.removeItem('user-login');
        location.href = '/';
    }
    const [modalShow, setModalShow] = useState(false)
    return (
        <header className="header">
            <Link href={ '/' } className="header__logo">
                <Image src={ Logo } alt="Coopers" />
            </Link>

            { logged.name ? (
                <button className="header__btn" onClick={ e => logout() }>
                    Hi { logged.name }! Logout?
                </button>                
            ) : (
                <button className="header__btn" onClick={ e => setModalShow(true) }>
                    entrar
                </button>
            ) }
            

            { modalShow ? (<ModalLogin toggleModal={ setModalShow } />) : false }
        </header>
    )
}
export default Header;