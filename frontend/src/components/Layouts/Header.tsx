import Link from "next/link"
import Image from "next/image"
import Logo from "../../assets/img/logo.png"
import ModalLogin from '../ModalLogin'
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from '@/store/actions/user'

const Header = () => {
    const dispatch = useDispatch();

    const { user } = useSelector((state: any) => state.user);

    const logout = () => {
        localStorage.removeItem('user-login');
        localStorage.removeItem("list_1");
        localStorage.removeItem("list_2");
        dispatch(userLogout())
        location.href = '/';
    }
    const [modalShow, setModalShow] = useState(false)
    return (
        <header className="header">
            <Link href={ '/' } className="header__logo">
                <Image src={ Logo } alt="Coopers" />
            </Link>

            { user ? (
                <button className="header__btn" onClick={ e => logout() }>
                    Hi { user.name }! Logout?
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