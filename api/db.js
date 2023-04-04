import mysql from 'mysql'

//export const db = mysql.createPool({
export const db = mysql.createConnection({
    //host: 'localhost',
    host: '127.0.0.1',
    user: 'jonathan',
    password: 'qazwsx25',
    database: 'crud_coopers'
})

