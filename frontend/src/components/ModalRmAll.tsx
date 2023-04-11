const ModalRmAll = (props: any) => {
    const { confirm_remove, close_fun } = props

    return (
        <div className="modal">
            <div className="modal__content">
                <button className="modal__close" onClick={ _ => close_fun(false) }>close</button>
                <p>Do you really want to delete the entire list?</p>
                <div className="modal__btn-ft">
                    <button className="modal__btn-close -out" onClick={ _ => close_fun(false) }>No</button>
                    <button className="modal__btn-close" onClick={ _ => confirm_remove() }>Yes</button>
                </div>
            </div>
        </div>
    )
}

export default ModalRmAll