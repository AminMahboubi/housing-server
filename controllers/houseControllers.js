const HouseModel = require('../model/houseModel');

exports.listHouses = (req, res) => {
  HouseModel.find({}, (err, houses) => {
    if (err) res.status(404).send(err);
    res.json(houses);
  })
}

exports.newHouse = (req, res) => {
  let house = new HouseModel(req.body);
  house.save((err, house) => {
    if (err) res.send(err);
    res.json({
      message: 'House successfully saved'
    });
  })
}

exports.getHouse = (req, res) => {
  HouseModel.findById(req.params.houseId, (err, house) => {
    if (err) res.send(err);
    res.json(house);
  })
}

exports.updateHouse = (req, res) => {
  HouseModel.findOneAndUpdate({
    _id: req.params.houseId
  }, req.body, {
    new: true
  }, (err, house) => {
    if (err) res.send(err);
    res.json({
      message: 'House successfully updated'
    });
  })
}

exports.deleteHouse = (req, res) => {
  HouseModel.remove({
    _id: req.params.houseId
  }, (err, house) => {
    if (err) res.send(err);
    res.json({
      message: 'House successfully deleted'
    });
  })
}
