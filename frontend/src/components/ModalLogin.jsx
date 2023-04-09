import { useState } from "react";
import Preload from './Preload';
const ModalLogin = (props) => {
    const { toggleModal } = props;
    const [showRegister, setShowRegister] = useState(false);

    const [userLogin, setUserLogin] = useState('');
    const [passLogin, setPassLogin] = useState('');
    const [failedLogin, setFailedLogin] = useState(false);

    const [userRegister, setUserRegister] = useState('');
    const [mailRegister, setMailRegister] = useState('');
    const [passRegister, setPassRegister] = useState('');
    const [respReg, setRespReg] = useState(null);

    const [loadingPromisse, setLoadingPromisse] = useState(false);

    window.addEventListener('keydown', (e) => { e.key === "Escape" ? toggleModal(false) : false });

    const clearLogin = () => {
        setUserLogin('');
        setPassLogin('');
        setFailedLogin(false);
    }

    const toggleRegister = (e) => {
        e.preventDefault();
        setShowRegister(!showRegister);
        clearLogin()
    }

    const login = (e) => {
        e.preventDefault();
        if(userLogin.trim() === "") return;
        if(passLogin.trim() === "") return;
        
        setFailedLogin(false);
        setLoadingPromisse(true);

        let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({ user: userLogin, password: passLogin })
        };
        
        fetch("http://localhost:8800/login", requestOptions)
            .then(r => r.json())
            .then(result => {
                if(result.status === 200) {
                    localStorage.setItem("user-login", JSON.stringify(result.user));

                    const lists = result.lists.map((item) => {
                        const { id, description, list, checked } = item;
                        return {
                            id,
                            description,
                            list,
                            checked: checked.data[0] > 0 ? true : false
                        }
                    })
                    
                    const list_1 = lists?.filter((item) => item.list == 1);
                    const list_2 = lists?.filter((item) => item.list == 2);

                    localStorage.setItem("list_1", JSON.stringify(list_1));
                    localStorage.setItem("list_2", JSON.stringify(list_2));
                    setTimeout(()=> toggleModal(false), 100);
                } else {
                    setFailedLogin(true)
                }
                setLoadingPromisse(false);
            })
            .catch(erro => {
                setFailedLogin(true)
                console.log('erro: ', erro)
                setLoadingPromisse(false);
            });
    }

    const register = (e) => {
        e.preventDefault();
        if(userRegister.trim() === "") return;
        if(mailRegister.trim() === "") return;
        if(passRegister.trim() === "") return;

        setRespReg(null);
        setLoadingPromisse(true);

        let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                user: userRegister,
                email: mailRegister,
                password: passRegister
            })
        };
        
        fetch("http://localhost:8800/users", requestOptions)
            .then(r => r.json())
            .then(result => {
                console.log({ result });

                setRespReg(result.msg);
                setLoadingPromisse(false);
                if(result.status === 200) {
                    const objStorager = {
                        id: result.dt.insertId,
                        name: userRegister,
                        email: mailRegister
                    }
                    localStorage.setItem("user-login", JSON.stringify(objStorager));
                    setTimeout(()=> toggleModal(false), 3000);
                }
            })
            .catch(erro => {
                setRespReg('Failed to register. Try again.')
                console.log('erro: ', erro)
                setLoadingPromisse(false);
            });

    }

    return(
        <div className="modal-login">
            <div className="modal-login__content">
                <button className="modal-login__close" onClick={ e => toggleModal(false) }>close</button>
                { showRegister ? (
                    <form className="modal-login__form" onSubmit={ e => register(e) }>
                        <h2 className="modal-login__title">
                            <strong>Register</strong><br /> here.
                        </h2>

                        <div className="modal-login__field">
                            <label htmlFor="user-name">User: *</label>
                            <input 
                                type="text" 
                                name="user-name" 
                                id="user-name" 
                                autoComplete="no"
                                value={ userRegister }
                                onChange={ e => setUserRegister(e.target.value) } />
                        </div>
                        <div className="modal-login__field">
                            <label htmlFor="user-mail">E-Mail: *</label>
                            <input 
                                type="email" 
                                name="user-mail" 
                                id="user-mail" 
                                autoComplete="no" 
                                value={ mailRegister } 
                                onChange={ e => setMailRegister(e.target.value) } />
                        </div>
                        <div className="modal-login__field">
                            <label htmlFor="user-pass">Password: *</label>
                            <input 
                                type="password" 
                                name="user-pass" 
                                id="user-pass" 
                                autoComplete="no" 
                                value={ passRegister }
                                onChange={ e => setPassRegister(e.target.value) } />
                        </div>
                        
                        { respReg ? (
                            <p className="modal-login__error">{ respReg }</p>
                        ) : false }
                        <button className="modal-login__btn">Register</button>
                        <p>Already registered?  <a href="#" onClick={ e => toggleRegister(e) }>to enter.</a></p>

                    </form>
                ) : (
                    <form className="modal-login__form" onSubmit={ e => login(e) }>
                        <h2 className="modal-login__title">
                            <strong>Sign in</strong> <br />
                            to access your list
                        </h2>

                        <div className="modal-login__field">
                            <label htmlFor="user-name">User:</label>
                            <input 
                                type="text" 
                                name="user-name" 
                                id="user-name" 
                                value={ userLogin } 
                                autoComplete="no"
                                onChange={ e => setUserLogin(e.target.value) } 
                                required />
                        </div>

                        <div className="modal-login__field">
                            <label htmlFor="user-pass">Password:</label>
                            <input 
                                type="password" 
                                name="user-pass" 
                                id="user-pass" 
                                value={ passLogin } 
                                autoComplete="no"
                                onChange={ e => setPassLogin(e.target.value) } 
                                required />
                        </div>

                        { failedLogin ? (
                            <p className="modal-login__error">Invalid password or username.</p>
                        ) : false }
                        
                        <button className="modal-login__btn">Sign in</button>

                        <p>Don't have an account? <a href="#" onClick={ e => toggleRegister(e) }>register here.</a></p>
                    </form>
                ) }
                <div className="modal-login__ico"></div>
                { loadingPromisse ? (
                    <div className="modal-login__loading">
                        <Preload />
                    </div>
                ) : false }
            </div>
        </div>
    )
}
export default ModalLogin