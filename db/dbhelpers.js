var db = require('./');

module.exports = {

  students: {
    getStudent: function (callback) {
      // fetch all students
      var queryStr = 'SELECT students.id, name, imgurl FROM students INNER JOIN images ON images.id = students.id;';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    postName: function (studentInfo, callback) {
      // add a student
      var studentQueryStr = `insert into students(name) values ('${studentInfo}')`;
      db.query(studentQueryStr, function(err, results) {
        callback(err, results);
      });
    },
    updateName: function (obj, callback) {
      var updateQueryStr = `UPDATE students SET name = '${obj.newName}' WHERE id = ${obj.id};`;
      db.query(updateQueryStr, function(err, results) {
        callback(err, results);
      });
    }
  },

  images: {
    postImg: function (studentInfo, callback) {
      // add a student image
      var imgQueryStr = `insert into images(imgurl) values ('${studentInfo}')`;
      db.query(imgQueryStr, function(err, results) {
        callback(err, results);
      });
    }
  }
};

