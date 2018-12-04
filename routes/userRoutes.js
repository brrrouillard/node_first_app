const file_path = "./DB/users.json";
const jsonfile = require("jsonfile");

module.exports = app => {
    app.post("/users/new", (req, res) => {
        let { email, username } = req.body;
        jsonfile.readFile(file_path, function (err, content) {
            content.push({ email, username });
            console.log("added " + email + "to DB");

            jsonfile.writeFile(file_path, content, function (err) {
                console.log(err);
            });

            res.sendStatus(200);
        });
    });

    app.get("/users", (req, res) => {
        jsonfile.readFile(file_path, (err, content) => {
            res.send(content);
        });
        console.log("GET returned");
    });

    app.get("/vue", (req, res) => {
        app.set('view engine', 'ejs');
        res.render('pages/index', {test: 'Salut'});
    })
}