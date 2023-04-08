import { db } from '../db.js';

export const getUsers = (_, res) => {
    //return res.status(200).json({ oi: 'testes' });
    const q = 'SELECT * FROM users';

    db.query(q, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const saveUser = (req, res) => {
    const { body } = req;
    const { user, email, password } = body;

    const query_sel = `SELECT id, name, email FROM users WHERE name = '${ user }' OR email = '${ email }';`;

    db.query(query_sel, (err, data) => {
        if(err) return res.json(err);

        if(data.length > 0) {
            return res.status(401).json({ status: 401, msg: 'User with that name/email already exists.' });
        } else {
            const query_ist = `INSERT INTO users (name, email, password) VALUES ('${user}', '${email}', MD5('${password}'))`;
            db.query(query_ist, (e, dt) => {
                if(e) return res.json(e);
                return res.status(200).json({ status: 200, dt, msg: 'User successfully registered.' });
            })

        }
    });

}