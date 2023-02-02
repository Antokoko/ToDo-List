const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    
    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    };

    let day = today.toLocaleDateString("es", options);

    res.render("list", {tipoDeDia: day, nuevaListaItems: items});

});

app.post("/", function (req, res) {
    let item = req.body.Nuevoitem;
    items.push(item);  
    res.redirect("/");
});


app.listen(3000, function() {
    console.log("Server is running on port 3000");
});


