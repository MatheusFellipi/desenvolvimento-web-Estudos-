//i,porta a dependencia
const sqlite3 = require("sqlite3").verbose()

//criar uma obejeto banco de dados - operaçoes
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizando o objeto de banco de dados
// db.serialize( () => {
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     const query =  `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items

//         ) VALUES ( ?,?,?,?,?,?,? );`

//     const values=[
//         "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
//         "Peperside",
//         "guilhemer gemballa, jardin america",
//         "numero 260",
//         "santa catarina",
//         "rio do sul",
//         "Residuos eletronicos, lampadas"


//     ]
//     function afterInsertData(err) {
//         if(err){
//             return console.log();
//         }
//         console.log("cadastrado com sucesso");
//         console.log(this);
//     }

//    // db.run(query, values , afterInsertData)

//   db.all(`SELECT * FROM places`, function(err,rows){
//         if(err){
//             return console.log(err);
//         }
//         console.log("aqui estao seus registro");
//         console.log(rows);
//     })
//   /*  db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
//         if(err){
//             return console.log(err);
//         }
//         console.log("Registrado deletado com sucesso");

//     })*/
//})
