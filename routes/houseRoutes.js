const express = require('express');

const houseController = require('../controllers/houseControllers');

var router = express.Router()

router.route('/')
  .get(houseController.listHouses)
  .post(houseController.newHouse);

router.route('/:houseId')
  .get(houseController.getHouse)
  .put(houseController.updateHouse)
  .delete(houseController.deleteHouse);

router.route('/user/:userId')
  .get(houseController.listUserHouses);

router.route('/user/:userId/:houseId')
  .put(houseController.updateHouse)
  .delete(houseController.deleteHouse);
module.exports = router;
