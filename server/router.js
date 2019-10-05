const router = require('express').Router();
const controller = require('./controller.js');

// routes students name
router
  .route('/students')
  .get(controller.students.get)
  .post(controller.students.post)
  .put(controller.students.update)

  // routes student image
router
  .route('/images')
  .post(controller.images.post)

router
  .route('/students/:id')
  .put(controller.students.update)  
module.exports = router