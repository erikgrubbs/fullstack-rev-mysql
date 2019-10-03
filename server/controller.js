const helper = require('../db/dbhelpers.js');

const controller = {
  students: {
    get: (req, res) => {
      helper.students.getStudent(function(err, results) {
        if (err) { console.error(err) };
        res.json(results);
      });
    },
    post: (req, res) => {
      // res.status(200).send("posted a name")
      var name = req.body.name;
      helper.students.postName(name, (err, results) => {
        if (err) {console.error(err)};
        res.status(200).send('successfully posted')
      })
    },
    update: (req, res) => {
      var request = {
        newName: req.body.name,
        id: req.body.id
      };
      helper.students.updateName(request, () => {
        if (err) {console.error(err)};
        res.status(200).send('successfully updated')
      })
    }
  },

  images: {
    post: (req, res) => {
      // res.status(200).send("posted an img")
      var imgurl = req.body.imgurl;
      helper.images.postImg(imgurl, (err, results) => {
        if (err) {console.error(err)};
        res.status(200).send('success')
      })
    },
  }
};

module.exports = controller