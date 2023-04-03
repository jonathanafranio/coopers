const ModalLogin = (props) => {
    const { toggleModal } = props;

    window.addEventListener('keydown', () => toggleModal(false));

    return(
        <div className="modal-login">
            <div className="modal-login__content">
                <button className="modal-login__close" onClick={ e => toggleModal(false) }>close</button>
                <form action="" className="modal-login__form">
                    <h2 className="modal-login__title">
                        <strong>Sign in</strong> <br />
                        to access your list
                    </h2>

                    <div className="modal-login__field">
                        <label htmlFor="user-name">User:</label>
                        <input type="text" name="user-name" id="user-name" />
                    </div>

                    <div className="modal-login__field">
                        <label htmlFor="user-pass">Password:</label>
                        <input type="password" name="user-pass" id="user-pass" />
                    </div>

                    <button className="modal-login__btn">Sign in</button>

                </form>
                <div className="modal-login__ico"></div>
            </div>
        </div>
    )
}
export default ModalLogin