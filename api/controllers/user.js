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
    
    console.log({ body })
    const q = `SELECT * FROM users WHERE name = '${ user }';`;
    
    db.query(q, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);

    })
}