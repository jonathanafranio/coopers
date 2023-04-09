import { useState } from "react";
import Preload from './Preload';
const ModalAdd = (props) => {
    const { list_id, user, close_fun } = props;

    const [item, setItem] = useState('');
    const [loadingPromisse, setLoadingPromisse] = useState(false);
    
    window.addEventListener('keydown', (e) => { e.key === "Escape" ? close_fun(false) : false });

    const saveList = (e) => {
        e.preventDefault();
        if(!item) return;

        setLoadingPromisse(true);

        let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({ user, list: list_id, description: item  })
        };
        
        fetch("http://localhost:8800/list", requestOptions)
            .then(r => r.json())
            .then(result => {
                setLoadingPromisse(false);
                const lists = result.list.map((item) => {
                    const { id, description, list, checked } = item;
                    return { 
                        id,
                        description,
                        list,
                        checked: checked.data[0] > 0 ? true : false
                    }
                });

                const list_current = lists.filter((item) => item.list == list_id)
                //console.log({ list_current })
                localStorage.setItem(`list_${list_id}`, JSON.stringify(list_current))
                location.href = '/';
            })
            .catch(erro => {
                console.log('erro: ', erro)
                setLoadingPromisse(false);
            });
    }

    return (
        <div className="modal">
            <div className="modal__content">
                <button className="modal__close" onClick={ _ => close_fun(false) }>close</button>

                <form className="modal__form" onSubmit={ e => saveList(e) }>
                    <div className="modal__field">
                        <label htmlFor="item-list">New task({ list_id }) item: *</label>
                        <input 
                            type="text" 
                            name="item-list" 
                            id="item-list" 
                            autoComplete="no"
                            value={ item }
                            onChange={ e => setItem(e.target.value) } />
                    </div>

                    <button className="modal__btn">To add</button>
                </form>

                { loadingPromisse ? (
                    <div className="modal__loading">
                        <Preload />
                    </div>
                ) : false }
            </div>
        </div>
    )
}
export default ModalAdd