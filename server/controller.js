const helper = require('../db/dbhelpers.js');

const controller = {
  students: {
    get: (req, res) => {
      helper.students.getStudent(function(err, results) {
        if (err) {res.status(404).send(err)};
        res.status(200).json(results);
      });
    },
    post: (req, res) => {
      var name = req.body.name;
      helper.students.postName(name, (err, results) => {
        if (err) {res.status(400).send(err)};
        res.status(200).send('successfully posted')
      })
    },
    update: (req, res) => {
      var information = {
        newName: req.body.name,
        id: req.params.id
      };
      helper.students.updateName(information, (err) => {
        if (err) {res.status(404).send(err)};
        res.status(200).send('successfully updated')
      })
    }
  },

  images: {
    post: (req, res) => {
      // res.status(200).send("posted an img")
      var imgurl = req.body.imgurl;
      helper.images.postImg(imgurl, (err, results) => {
        if (err) {res.status(400).send(err)};
        res.status(200).send('success')
      })
    },
  }
};

module.exports = controller