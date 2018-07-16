var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Asset = require('../models/User.js');

/* GET ALL Asset with root node */
router.get('/root', function(req, res, next) {
  Asset.find(function (err, products) {
    if (err) return next(err);
    res.json({parent_key : products});
  });
});

/* GET ALL User */
router.get('/', function(req, res, next) {
  Asset.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE User BY ID */
router.get('/:id', function(req, res, next) {
  Asset.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE User */
router.post('/', function(req, res, next) {
  Asset.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE User */
router.put('/:id', function(req, res, next) {
  Asset.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE User */
router.delete('/:id', function(req, res, next) {
  Asset.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
