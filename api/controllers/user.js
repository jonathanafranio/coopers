import { db } from '../db.js';

export const getUsers = (_, res) => {
    //return res.status(200).json({ oi: 'testes' });
    const q = 'SELECT * FROM users';

    db.query(q, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const login = (req, res) => {
    const { body } = req;
    const { user, password } = body;
    
    //const q = `SELECT * FROM users WHERE name = '${ user }' AND password = MD5('${password}');`;
    const q = `SELECT id, name, email, phone FROM users WHERE name = '${ user }' AND password = MD5('${password}');`;
    //const q = `SELECT * FROM users WHERE name = '${ user }';`;
    
    db.query(q, (err, data) => {
        if(err) return res.json(err);

        if(data.length > 0) {
            return res.status(200).json(data);
        } else {
            return req.status(200).json('Usuario ou senha errada.');
        }
    })
}