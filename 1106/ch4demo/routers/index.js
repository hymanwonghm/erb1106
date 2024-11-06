const { Router } = require('express')
const { indexController, checkController, createController, updateController, deleteController, check1Controller } = require('../controllers')
const router = Router()

router.route('/').get(indexController)
router.route('/todo').get(checkController)
router.route('/todo').post(createController)
router.route('/todo/:todoId').put(updateController)
router.route('/todo/:todoId').delete(deleteController)
router.route('/todo/:todoId').get(check1Controller)

module.exports = { router }