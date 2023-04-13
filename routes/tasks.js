const express = require('express');
const router = express.Router();
const controller =  require('../controllers/controller')

router.route('/')
    .get(controller.getAlltasks)
    .post(controller.createNewtask)
    .patch(controller.updateTask)
    .delete(controller.deleteTask)



module.exports = router