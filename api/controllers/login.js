import { db } from '../db.js';

export const login = (req, res) => {
    const { body } = req;
    const { user, password } = body;
    
    //const q = `SELECT * FROM users WHERE name = '${ user }' AND password = MD5('${password}');`;
    const q = `SELECT id, name, email FROM users WHERE name = '${ user }' AND password = MD5('${password}');`;
    
    db.query(q, (err, data) => {
        if(err) return res.json(err);

        if(data.length > 0) {
            return res.status(200).json(data);
        } else {
            return req.status(401).json('Usuario ou senha errada.');
        }
    })
}