const HouseModel = require('../model/houseModel');

exports.listHouses = (req, res) => {
  HouseModel.find({}, "-_uid", (err, houses) => {
    if (err) res.status(404).send(err);
    res.json(houses);
  });
}

exports.listUserHouses = (req, res) => {
  HouseModel.find({"_uid": req.params.userId}, (err, houses) => {
    if (err) res.status(404).send(err);
    res.json(houses);
  });
}

exports.newHouse = (req, res) => {
  let house = new HouseModel(req.body);
  house.updateDate = null;
  house.insertDate = Date.now();
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
    house._uid = null;
    res.json(house);
  })
}

exports.updateHouse = (req, res) => {
  req.body.updateDate = Date.now();
  HouseModel.findOneAndUpdate({
    _id: req.params.houseId
  }, req.body, {
    new: true
  }, (err, house) => {
    if (err) res.send(err);
    res.json({
      message: 'House successfully updated',
      house: house
    });
  })
}

exports.deleteHouse = (req, res) => {
  HouseModel.remove({
    _id: req.params.houseId,
  }, (err, house) => {
    if (err) res.send(err);
    res.json({
      message: 'House successfully deleted'
    });
  })
}
