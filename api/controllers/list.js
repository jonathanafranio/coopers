import { db } from '../db.js';

export const getList = (req, res) => {

    if(!req.query.id) {
        return res.status(401).json({ status: 401, erro: 'Uninformed user.' })
    }

    const q = `SELECT * FROM list_itens WHERE user = '${req.query.id}';`;
    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json({ status: 200, data });
    })

}

export const addList = (req, res) => {
    const { body } = req;
    const { user, list, description } = body;
    
    const q = `INSERT INTO list_itens (description, list, user, checked) VALUES ('${description}', '${list}', '${user}', 0);`;
    
    db.query(q, (err, data) => {
        if(err) return res.json(err);
        
        const q_sel = `SELECT * FROM list_itens WHERE user = '${user}';`;
        db.query(q_sel, (e, list) => {
            if(e) return res.json(e);
            return res.status(200).json({ status: 200, data, msg: 'Item added to list.', list });
        })

    })
}

export const editItem = (req, res) => {
    if(!req.params.id) {
        return res.status(401).json({ status: 401, erro: 'Uninformed id.' })
    }

    const q = `UPDATE list_itens SET checked = '${req.body.checked}' WHERE id = '${req.params.id}';`;
    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json({ status: 200, data })
    })
}

export const removeItem = (req, res) => {
    const { remove } = req.body
    if(!remove) {
        return res.status(401).json({ status: 401, erro: 'List 404' });
    }
    if(!Array.isArray(remove)) {
        return res.status(401).json({ status: 401, erro: 'List 404' });
    }

    const q = `DELETE FROM list_itens WHERE id IN (${ remove.join(', ') });`;
    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json({ status: 200, data })
    })
}