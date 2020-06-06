const express = require("express")
const serve  = express()

//config pasta public
serve.use(express.static("public"))

// templete engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: serve,
    noCache:true,
})

//req requisiçao
//res resposta
serve.get("/", (req, res )=> {
   return res.render("index.html")
})
serve.get("/create-point", (req, res )=> {
   return res.render("create-point.html")
})

serve.get("/search", (req, res )=> {
   return res.render("search-results.html")
})
//on serve
serve.listen(3000)
