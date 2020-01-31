const MongoClient = require("mongodb").MongoClient;
var express = require("express");
var router = express.Router();

MongoClient.connect("mongodb://localhost:27017", (err, database) => {
  if (err) return console.log(err);
  db = database.db("ap");
});

/* GET users listing. */
router.get("/", function(req, res, next) {
  db.collection("studenten")
    .find()
    .toArray((err, result) => {
      res.json(result);
    });
});
router.post("/toevoegen", (req, res) => {
  db.collection("studenten").insertOne({
    naam: req.body.naam,
    geboortedatum: req.body.geboortedatum,
    studierichting: req.body.studierichting
  });
});
module.exports = router;
