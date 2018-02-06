const express = require('express');

const houseController = require('../controllers/houseControllers');

var router = express.Router()

router.route('/')
  .get(houseController.listHouses);

router.route('/:houseId')
  .get(houseController.getHouse);

router.route('/user/:userId')
  .get(houseController.listUserHouses)
  .post(houseController.newHouse);

router.route('/user/:userId/:houseId')
  .put(houseController.updateHouse)
  .delete(houseController.deleteHouse);
module.exports = router;
