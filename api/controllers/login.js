import { db } from '../db.js';

export const login = (req, res) => {
    const { body } = req;
    const { user, password } = body;
    
    const q = `SELECT id, name, email FROM users WHERE name = '${ user }' AND password = MD5('${password}');`;
    
    db.query(q, (err, data) => {
        if(err) return res.json(err);

        if(data.length > 0) {
            const user = data[0];
            const q_list = `SELECT * FROM list_itens WHERE user = ${user.id};`;
            db.query(q_list, (e, lists) => {
                if(e) return res.json(e);
                return res.status(200).json({ status: 200, user, lists });
            })
        } else {
            return res.status(401).json({ status: 401, error: 'Usuario ou senha errada.' });
        }
    })
}