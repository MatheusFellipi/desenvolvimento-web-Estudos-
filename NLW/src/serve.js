const express = require("express");
const serve = express();

const db = require("./database/db");

//config pasta public
serve.use(express.static("public"));

//habilitar o uso do req.body
serve.use(express.urlencoded({ extended: true }));

// templete engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: serve,
    noCache: true,
});

//req requisiçao
//res resposta
serve.get("/", (req, res) => {
    return res.render("index.html");
});
serve.get("/create-point", (req, res) => {
    //req.query: string da nossa url
    console.log(req.query);

    return res.render("create-point.html");
});

serve.post("/savepoint", (req, res) => {
    //reg.body: o corpo do formulario
    // console.log(req.body);

    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items

        ) VALUES ( ?,?,?,?,?,?,? );`;

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items,
    ];

    function afterInsertData(err) {
        if (err) {
            console.log(err);

            return res.render("create-point.html", { saved: false });
        }
        console.log("cadastrado com sucesso");
        console.log(this);

        return res.render("create-point.html", { saved: true });
    }

    db.run(query, values, afterInsertData);
});

serve.get("/search", (req, res) => {
    const search = req.query.search;

    if (search == "") {
        return res.render("search-results.html", {total: 0} );
    }

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err);
        }

        const total = rows.length;
        return res.render("search-results.html", {
            places: rows,
            total: total,
        });
    });
});
//on serve
serve.listen(3000);
