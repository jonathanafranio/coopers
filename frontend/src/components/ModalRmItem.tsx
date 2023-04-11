const ModalRmItem = (props) => {
    const { list_id, item, confirm_remove, close_fun } = props
    
    return (
        <div className="modal">
            <div className="modal__content">
                <button className="modal__close" onClick={ _ => close_fun(null) }>close</button>
                <p>Do you really want to delete <strong>{item.description}</strong>?</p>
                <div className="modal__btn-ft">
                    <button className="modal__btn-close -out" onClick={ _ => close_fun(null) }>No</button>
                    <button className="modal__btn-close" onClick={ _ => confirm_remove(list_id, [item.id]) }>Yes</button>
                </div>
            </div>
        </div>
    )
}

export default ModalRmItem