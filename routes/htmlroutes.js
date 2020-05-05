var path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../Develop/public/index.html"));
    });

    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../Develop/public/stats.html"));
    });

    app.get("/exercise", function (req, res) {
        console.log("we hit exercise route")
        res.sendFile(path.join(__dirname, "../Develop/public/exercise.html"));
    });

};