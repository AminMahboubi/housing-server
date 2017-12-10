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

module.exports = router;
