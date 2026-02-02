const express = require("express");
const app = express();

const { engine } = require("express-handlebars");

app.engine(".hbs", engine({
    extname:"hbs"
}));
app.set('view engine', '.hbs');
app.set("views", "./views")
app.use("/", express.static("./public"));


app.get("/", (request, response) => {
    response.render("home", {
        title:"main"
    });
});

app.listen(3000, () =>{
    console.log("it's alive");
});